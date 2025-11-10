'use client'

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { QRCodeOptions } from '@/types/qr';
import { QRGenerator } from '@/lib/qrGenerator';
import { FileDown, FileImage } from 'lucide-react';
import Image from 'next/image';

interface QRPreviewProps {
  options: QRCodeOptions;
}

export default function QRPreview({ options }: QRPreviewProps) {
  const t = useTranslations();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const generateQR = async () => {
      if (!options.content) {
        setQrDataUrl('');
        return;
      }

      setLoading(true);
      try {
        const dataUrl = await QRGenerator.generateDataURL(options);
        setQrDataUrl(dataUrl);
      } catch (error) {
        console.error('QR 코드 생성 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    generateQR();
  }, [options]);

  const handleDownloadPNG = async () => {
    if (!options.content) return;
    await QRGenerator.downloadAsPNG(options, 'qrcode');
  };

  const handleDownloadSVG = async () => {
    if (!options.content) return;
    await QRGenerator.downloadAsSVG(options, 'qrcode');
  };

  return (
    <div className="w-full">
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-6">
        {t('steps.download.title')}
      </h3>
      
      <div className="surface p-6 sm:p-8 flex flex-col items-center">
        {loading ? (
          <div className="w-full h-48 sm:h-64 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 
                          border-4 border-primary
                          border-t-blue-600"></div>
          </div>
        ) : qrDataUrl ? (
          <>
            <div className="bg-white p-6 sm:p-8 mb-6 rounded-xl shadow-md border border-primary">
              <img 
                src={qrDataUrl} 
                alt="QR Code" 
                className="max-w-full h-auto"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
            
            {/* Enhanced Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={handleDownloadPNG}
                className="btn-primary flex items-center justify-center gap-2 
                         px-6 py-3 font-semibold rounded-lg shadow-md
                         transition-all duration-200 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <FileImage size={20} />
                {t('steps.download.pngButton')}
              </button>
              <button
                onClick={handleDownloadSVG}
                className="flex items-center justify-center gap-2 
                         px-6 py-3 bg-green-600 hover:bg-green-700 
                         text-white font-semibold rounded-lg shadow-md
                         transition-all duration-200 hover:scale-105
                         focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <FileDown size={20} />
                {t('steps.download.svgButton')}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-40 h-40 mx-auto mb-6 
                          surface rounded-2xl 
                          flex items-center justify-center 
                          border-2 border-dashed border-primary opacity-70">
              <Image 
                src="/qr.svg" 
                alt="QR Code" 
                width={64} 
                height={64} 
                className="opacity-50" />
            </div>
            <p className="text-base text-secondary font-medium">
              {t('steps.download.placeholder')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}