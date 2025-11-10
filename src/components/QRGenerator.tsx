'use client'

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { QRType, QRCodeOptions } from '@/types/qr';
import QRTypeSelector from '@/components/QRTypeSelector';
import QRContentInput from '@/components/QRContentInput';
import QRCustomizer from '@/components/QRCustomizer';
import QRPreview from '@/components/QRPreview';
import CoupangAd from '@/components/CoupangAd';

interface QRGeneratorProps {
  readonly preselectedType?: string;
}

export default function QRGenerator({ preselectedType }: QRGeneratorProps) {
  const t = useTranslations();
  
  const validQRTypes = [
    'url', 'text', 'email', 'sms', 'wifi', 'vcard', 
    'bitcoin', 'twitter', 'facebook', 'pdf', 'mp3', 
    'appstore', 'image'
  ] as const;

  const getThemeAwareDefaults = (): QRCodeOptions => {
    const defaultType = preselectedType && validQRTypes.includes(preselectedType as any) 
      ? (preselectedType as QRType) 
      : 'url';

    if (typeof window !== 'undefined') {
      const root = document.documentElement;
      const computedStyle = getComputedStyle(root);
      const textPrimary = computedStyle.getPropertyValue('--color-text-primary').trim();
      const background = computedStyle.getPropertyValue('--color-background').trim();
      
      return {
        type: defaultType,
        content: '',
        size: 300,
        fgColor: textPrimary ? `rgb(${textPrimary})` : '#000000',
        bgColor: background ? `rgb(${background})` : '#FFFFFF',
        errorCorrection: 'M',
        includeMargin: true,
        pattern: 'square',
        borderColor: textPrimary ? `rgb(${textPrimary})` : '#000000',
        borderStyle: 'square',
        centerStyle: 'square',
      };
    }
    
    return {
      type: defaultType,
      content: '',
      size: 300,
      fgColor: '#000000',
      bgColor: '#FFFFFF',
      errorCorrection: 'M',
      includeMargin: true,
      pattern: 'square',
      borderColor: '#000000',
      borderStyle: 'square',
      centerStyle: 'square',
    };
  };

  const [qrOptions, setQrOptions] = useState<QRCodeOptions>(getThemeAwareDefaults());

  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      {/* Enhanced Progress Steps */}
      <div className="flex justify-center mb-10">
        <div className="surface-elevated px-8 py-4 rounded-full">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentStep(1)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 font-bold border-2 ${
                currentStep >= 1
                  ? 'btn-gradient shadow-lg scale-110'
                  : 'surface text-secondary border-primary hover:scale-105'
              }`}
            >
              1
            </button>
            <div className={`w-20 h-2 rounded-full transition-all duration-300 ${
              currentStep >= 2 
                ? 'gradient-accent' 
                : 'surface'
            }`} />
            <button
              onClick={() => setCurrentStep(2)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 font-bold border-2 ${
                currentStep >= 2
                  ? 'btn-gradient shadow-lg scale-110'
                  : 'surface text-secondary border-primary hover:scale-105'
              }`}
            >
              2
            </button>
            <div className={`w-20 h-2 rounded-full transition-all duration-300 ${
              currentStep >= 3 
                ? 'gradient-accent' 
                : 'surface'
            }`} />
            <button
              onClick={() => setCurrentStep(3)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 font-bold border-2 ${
                currentStep >= 3
                  ? 'btn-gradient shadow-lg scale-110'
                  : 'surface text-secondary border-primary hover:scale-105'
              }`}
            >
              3
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {/* Enhanced Left Column - Controls */}
        <div className="space-y-6">
          {/* QR Type Selection */}
          <div className="surface-elevated p-6 hover:shadow-lg transition-shadow duration-300">
            <QRTypeSelector
              selectedType={qrOptions.type}
              onTypeSelect={(type) => {
                setQrOptions({ ...qrOptions, type, content: '' });
                setCurrentStep(1);
              }}
            />
          </div>

          {/* Content Input */}
          <div className="surface-elevated p-6 hover:shadow-lg transition-shadow duration-300">
            <QRContentInput
              type={qrOptions.type}
              onContentChange={(content) => {
                setQrOptions({ ...qrOptions, content });
                if (content && currentStep === 1) setCurrentStep(2);
              }}
            />
          </div>

          {/* Customization */}
          <div className="surface-elevated p-6 hover:shadow-lg transition-shadow duration-300">
            <QRCustomizer
              fgColor={qrOptions.fgColor}
              bgColor={qrOptions.bgColor}
              size={qrOptions.size}
              errorCorrection={qrOptions.errorCorrection}
              includeMargin={qrOptions.includeMargin}
              pattern={qrOptions.pattern}
              borderColor={qrOptions.borderColor}
              borderStyle={qrOptions.borderStyle}
              centerStyle={qrOptions.centerStyle}
              onFgColorChange={(color) => {
                setQrOptions({ ...qrOptions, fgColor: color });
                if (currentStep === 2) setCurrentStep(3);
              }}
              onBgColorChange={(color) => {
                setQrOptions({ ...qrOptions, bgColor: color });
                if (currentStep === 2) setCurrentStep(3);
              }}
              onSizeChange={(size) => {
                setQrOptions({ ...qrOptions, size });
                if (currentStep === 2) setCurrentStep(3);
              }}
              onErrorCorrectionChange={(level) =>
                setQrOptions({ ...qrOptions, errorCorrection: level })
              }
              onMarginChange={(include) =>
                setQrOptions({ ...qrOptions, includeMargin: include })
              }
              onPatternChange={(pattern) => {
                setQrOptions({ ...qrOptions, pattern });
                if (currentStep === 2) setCurrentStep(3);
              }}
              onBorderColorChange={(color) => {
                setQrOptions({ ...qrOptions, borderColor: color });
                if (currentStep === 2) setCurrentStep(3);
              }}
              onBorderStyleChange={(style) => {
                setQrOptions({ ...qrOptions, borderStyle: style });
                if (currentStep === 2) setCurrentStep(3);
              }}
              onCenterStyleChange={(style) => {
                setQrOptions({ ...qrOptions, centerStyle: style });
                if (currentStep === 2) setCurrentStep(3);
              }}
            />
          </div>
        </div>

        {/* Enhanced Right Column - Preview */}
        <div className="lg:sticky lg:top-8 h-fit">
          <div className="surface-elevated p-6 hover:shadow-lg transition-shadow duration-300">
            <QRPreview options={qrOptions} />
          </div>

          {/* Advertisement */}
          <CoupangAd />
        </div>
      </div>
    </>
  );
}