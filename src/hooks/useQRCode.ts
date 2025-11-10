import { useState, useEffect, useCallback } from 'react';
import { QRCodeOptions } from '@/types/qr';
import { QRGenerator } from '@/lib/qrGenerator';
import { debounce } from '@utils/common';

interface UseQRCodeReturn {
  qrDataUrl: string;
  loading: boolean;
  error: string | null;
  generateQR: (options: QRCodeOptions) => Promise<void>;
  downloadPNG: () => void;
  downloadSVG: () => void;
}

export function useQRCode(options: QRCodeOptions): UseQRCodeReturn {
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentOptions, setCurrentOptions] = useState<QRCodeOptions | null>(null);

  // Debounced QR generation
  const debouncedGenerate = useCallback(
    debounce(async (opts: QRCodeOptions) => {
      if (!opts.content) {
        setQrDataUrl('');
        setCurrentOptions(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const dataUrl = await QRGenerator.generateDataURL(opts);
        
        setQrDataUrl(dataUrl);
        setCurrentOptions(opts);
      } catch (err) {
        console.error('QR generation error:', err);
        setError('Failed to generate QR code');
        setQrDataUrl('');
        setCurrentOptions(null);
      } finally {
        setLoading(false);
      }
    }, 300),
    []
  );

  // Generate QR code when options change
  useEffect(() => {
    debouncedGenerate(options);
  }, [options, debouncedGenerate]);

  // Download functions
  const downloadPNG = useCallback(() => {
    if (currentOptions) {
      QRGenerator.downloadAsPNG(currentOptions);
    }
  }, [currentOptions]);

  const downloadSVG = useCallback(() => {
    if (currentOptions) {
      QRGenerator.downloadAsSVG(currentOptions);
    }
  }, [currentOptions]);

  // Public generate function
  const generateQR = useCallback(async (opts: QRCodeOptions) => {
    await debouncedGenerate(opts);
  }, [debouncedGenerate]);

  return {
    qrDataUrl,
    loading,
    error,
    generateQR,
    downloadPNG,
    downloadSVG,
  };
}