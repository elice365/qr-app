'use client'

import React from 'react';
import { HexColorPicker } from 'react-colorful';
import { useTranslations } from 'next-intl';

interface QRCustomizerProps {
  fgColor: string;
  bgColor: string;
  size: number;
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
  includeMargin: boolean;
  pattern?: string;
  borderColor?: string;
  borderStyle?: string;
  centerStyle?: string;
  onFgColorChange: (color: string) => void;
  onBgColorChange: (color: string) => void;
  onSizeChange: (size: number) => void;
  onErrorCorrectionChange: (level: 'L' | 'M' | 'Q' | 'H') => void;
  onMarginChange: (include: boolean) => void;
  onPatternChange?: (pattern: string) => void;
  onBorderColorChange?: (color: string) => void;
  onBorderStyleChange?: (style: string) => void;
  onCenterStyleChange?: (style: string) => void;
}

export default function QRCustomizer({
  fgColor,
  bgColor,
  size,
  errorCorrection,
  includeMargin,
  pattern = 'square',
  borderColor,
  borderStyle = 'square',
  centerStyle = 'square',
  onFgColorChange,
  onBgColorChange,
  onSizeChange,
  onErrorCorrectionChange,
  onMarginChange,
  onPatternChange,
  onBorderColorChange,
  onBorderStyleChange,
  onCenterStyleChange,
}: QRCustomizerProps) {
  const t = useTranslations();
  const [activeTab, setActiveTab] = React.useState<'colors' | 'style' | 'size' | 'advanced'>('style');
  const [showFgPicker, setShowFgPicker] = React.useState(false);
  const [showBgPicker, setShowBgPicker] = React.useState(false);
  const [showBorderPicker, setShowBorderPicker] = React.useState(false);

  // Pattern style options
  const patternStyles = [
    { id: 'square', label: '□' },
    { id: 'dots', label: '●' },
    { id: 'rounded', label: '◉' },
    { id: 'extra-rounded', label: '◕' },
    { id: 'classy', label: '◈' },
    { id: 'classy-rounded', label: '◇' },
    { id: 'sharp', label: '◆' },
    { id: 'smooth', label: '○' },
  ];

  // Border style options - only 3 working options
  const borderStyles = [
    { id: 'square', label: '■' },
    { id: 'dot', label: '●' },
    { id: 'extra-rounded', label: '◉' },
  ];

  // Center style options - only 2 working options
  const centerStyles = [
    { id: 'square', label: '■' },
    { id: 'dot', label: '●' },
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">
        3. {t('customization.title')}
      </h3>
      
      {/* Responsive Tab Navigation */}
      <div className="flex surface p-1 rounded-lg mb-6">
        <button
          onClick={() => setActiveTab('style')}
          className={`
            flex-1 py-2 px-3 sm:px-4 rounded-md font-medium transition-all duration-200
            text-sm sm:text-base
            ${activeTab === 'style'
              ? 'surface-elevated text-blue-600 shadow-md'
              : 'text-secondary hover:text-primary'
            }
          `}
        >
          {t('customization.tabs.style')}
        </button>
        <button
          onClick={() => setActiveTab('colors')}
          className={`
            flex-1 py-2 px-3 sm:px-4 rounded-md font-medium transition-all duration-200
            text-sm sm:text-base
            ${activeTab === 'colors'
              ? 'surface-elevated text-blue-600 shadow-md'
              : 'text-secondary hover:text-primary'
            }
          `}
        >
          {t('customization.tabs.colors')}
        </button>
        <button
          onClick={() => setActiveTab('size')}
          className={`
            flex-1 py-2 px-3 sm:px-4 rounded-md font-medium transition-all duration-200
            text-sm sm:text-base
            ${activeTab === 'size'
              ? 'surface-elevated text-blue-600 shadow-md'
              : 'text-secondary hover:text-primary'
            }
          `}
        >
          {t('customization.tabs.size')}
        </button>
        <button
          onClick={() => setActiveTab('advanced')}
          className={`
            flex-1 py-2 px-3 sm:px-4 rounded-md font-medium transition-all duration-200
            text-sm sm:text-base
            ${activeTab === 'advanced'
              ? 'surface-elevated text-blue-600 shadow-md'
              : 'text-secondary hover:text-primary'
            }
          `}
        >
          {t('customization.tabs.advanced')}
        </button>
      </div>

      <div className="space-y-4">
        {activeTab === 'style' && (
          <div className="space-y-6">
            {/* Pattern Style */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                {t('customization.pattern.label')}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {patternStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => onPatternChange?.(style.id)}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200
                      flex flex-col items-center justify-center
                      ${pattern === style.id
                        ? 'border-primary surface-elevated'
                        : 'surface hover:shadow-md'
                      }
                    `}
                    title={t(`customization.pattern.${style.id}`)}
                  >
                    <span className="text-2xl mb-1">{style.label}</span>
                    <span className="text-xs text-secondary">{t(`customization.pattern.${style.id}`)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Border Style */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                {t('customization.borderStyle.label')}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {borderStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => onBorderStyleChange?.(style.id)}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200
                      flex flex-col items-center justify-center
                      ${borderStyle === style.id
                        ? 'border-primary surface-elevated'
                        : 'surface hover:shadow-md'
                      }
                    `}
                    title={t(`customization.borderStyle.${style.id}`)}
                  >
                    <span className="text-2xl mb-1">{style.label}</span>
                    <span className="text-xs text-secondary">{t(`customization.borderStyle.${style.id}`)}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Center Style */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-3">
                {t('customization.centerStyle.label')}
              </label>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {centerStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => onCenterStyleChange?.(style.id)}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-200
                      flex flex-col items-center justify-center
                      ${centerStyle === style.id
                        ? 'border-primary surface-elevated'
                        : 'surface hover:shadow-md'
                      }
                    `}
                    title={t(`customization.centerStyle.${style.id}`)}
                  >
                    <span className="text-2xl mb-1">{style.label}</span>
                    <span className="text-xs text-secondary">{t(`customization.centerStyle.${style.id}`)}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'colors' && (
          <div className="space-y-4">
            {/* Data Color (Foreground) */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('customization.colors.foreground')}
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowFgPicker(!showFgPicker)}
                  className="w-full h-12 rounded-lg border-2 border-primary 
                           flex items-center px-4 transition-all duration-200
                           hover:border-[rgb(var(--color-primary-hover))] hover:shadow-sm focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:ring-offset-2"
                  style={{ backgroundColor: fgColor }}
                >
                  <span className="surface-elevated px-3 py-1 rounded text-sm font-mono shadow-sm text-primary">
                    {fgColor}
                  </span>
                </button>
                {showFgPicker && (
                  <div className="absolute z-10 mt-2">
                    <div 
                      className="fixed inset-0" 
                      onClick={() => setShowFgPicker(false)}
                    />
                    <div className="relative surface-elevated p-4 rounded-lg shadow-xl">
                      <HexColorPicker color={fgColor} onChange={onFgColorChange} />
                      <button 
                        onClick={() => setShowFgPicker(false)}
                        className="mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        {t('common.apply')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 배경색 */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('customization.colors.background')}
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowBgPicker(!showBgPicker)}
                  className="w-full h-12 rounded-lg border-2 border-primary 
                           flex items-center px-4 transition-all duration-200
                           hover:border-[rgb(var(--color-primary-hover))] hover:shadow-sm focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:ring-offset-2"
                  style={{ backgroundColor: bgColor }}
                >
                  <span className="surface-elevated px-3 py-1 rounded text-sm font-mono shadow-sm text-primary">
                    {bgColor}
                  </span>
                </button>
                {showBgPicker && (
                  <div className="absolute z-10 mt-2">
                    <div 
                      className="fixed inset-0" 
                      onClick={() => setShowBgPicker(false)}
                    />
                    <div className="relative surface-elevated p-4 rounded-lg shadow-xl">
                      <HexColorPicker color={bgColor} onChange={onBgColorChange} />
                      <button 
                        onClick={() => setShowBgPicker(false)}
                        className="mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        {t('common.apply')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Border Color */}
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('customization.colors.border')}
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowBorderPicker(!showBorderPicker)}
                  className="w-full h-12 rounded-lg border-2 border-primary 
                           flex items-center px-4 transition-all duration-200
                           hover:border-[rgb(var(--color-primary-hover))] hover:shadow-sm focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:ring-offset-2"
                  style={{ backgroundColor: borderColor }}
                >
                  <span className="surface-elevated px-3 py-1 rounded text-sm font-mono shadow-sm text-primary">
                    {borderColor}
                  </span>
                </button>
                {showBorderPicker && (
                  <div className="absolute z-10 mt-2">
                    <div 
                      className="fixed inset-0" 
                      onClick={() => setShowBorderPicker(false)}
                    />
                    <div className="relative surface-elevated p-4 rounded-lg shadow-xl">
                      <HexColorPicker color={borderColor} onChange={(color) => onBorderColorChange?.(color)} />
                      <button 
                        onClick={() => setShowBorderPicker(false)}
                        className="mt-2 w-full px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                      >
                        {t('common.apply')}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Color Presets */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
              <button
                onClick={() => {
                  onFgColorChange('#000000');
                  onBgColorChange('#FFFFFF');
                  onBorderColorChange?.('#000000');
                }}
                className="h-12 sm:h-14 rounded-lg border-2 border-primary gradient-preset-bw
                         hover:border-[rgb(var(--color-primary-hover))] hover:scale-105 transition-all duration-200 hover:surface-elevated"
                aria-label="Black and White"
              />
              <button
                onClick={() => {
                  onFgColorChange('#1e40af');
                  onBgColorChange('#dbeafe');
                  onBorderColorChange?.('#1e40af');
                }}
                className="h-12 sm:h-14 rounded-lg border-2 border-primary gradient-preset-blue
                         hover:border-[rgb(var(--color-primary-hover))] hover:scale-105 transition-all duration-200 hover:surface-elevated"
                aria-label="Blue Theme"
              />
              <button
                onClick={() => {
                  onFgColorChange('#166534');
                  onBgColorChange('#dcfce7');
                  onBorderColorChange?.('#166534');
                }}
                className="h-12 sm:h-14 rounded-lg border-2 border-primary gradient-preset-green
                         hover:border-[rgb(var(--color-primary-hover))] hover:scale-105 transition-all duration-200 hover:surface-elevated"
                aria-label="Green Theme"
              />
              <button
                onClick={() => {
                  onFgColorChange('#991b1b');
                  onBgColorChange('#fee2e2');
                  onBorderColorChange?.('#991b1b');
                }}
                className="h-12 sm:h-14 rounded-lg border-2 border-primary gradient-preset-red
                         hover:border-[rgb(var(--color-primary-hover))] hover:scale-105 transition-all duration-200 hover:surface-elevated"
                aria-label="Red Theme"
              />
              <button
                onClick={() => {
                  onFgColorChange('#9333ea');
                  onBgColorChange('#f3e8ff');
                  onBorderColorChange?.('#9333ea');
                }}
                className="h-12 sm:h-14 rounded-lg border-2 border-primary gradient-preset-purple
                         hover:border-[rgb(var(--color-primary-hover))] hover:scale-105 transition-all duration-200 hover:surface-elevated"
                aria-label="Purple Theme"
              />
            </div>
          </div>
        )}

        {activeTab === 'size' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('customization.sizeLabel')}: <span className="text-blue-600 dark:text-blue-400">{size}px</span>
              </label>
              <input
                type="range"
                min="100"
                max="600"
                step="50"
                value={size}
                onChange={(e) => onSizeChange(Number(e.target.value))}
                className="w-full h-2 surface rounded-lg appearance-none cursor-pointer accent-blue-600"
              />
            </div>
            
            {/* Size Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => onSizeChange(200)}
                className={`
                  px-3 py-2 rounded-lg font-medium transition-all duration-200
                  ${size === 200 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'surface border-2 border-primary text-primary hover:border-[rgb(var(--color-primary-hover))] hover:shadow-md'
                  }
                `}
              >
                200px
              </button>
              <button
                onClick={() => onSizeChange(300)}
                className={`
                  px-3 py-2 rounded-lg font-medium transition-all duration-200
                  ${size === 300 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'surface border-2 border-primary text-primary hover:border-[rgb(var(--color-primary-hover))] hover:shadow-md'
                  }
                `}
              >
                300px
              </button>
              <button
                onClick={() => onSizeChange(400)}
                className={`
                  px-3 py-2 rounded-lg font-medium transition-all duration-200
                  ${size === 400 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'surface border-2 border-primary text-primary hover:border-[rgb(var(--color-primary-hover))] hover:shadow-md'
                  }
                `}
              >
                400px
              </button>
              <button
                onClick={() => onSizeChange(500)}
                className={`
                  px-3 py-2 rounded-lg font-medium transition-all duration-200
                  ${size === 500 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'surface border-2 border-primary text-primary hover:border-[rgb(var(--color-primary-hover))] hover:shadow-md'
                  }
                `}
              >
                500px
              </button>
            </div>
          </div>
        )}

        {activeTab === 'advanced' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-primary mb-2">
                {t('customization.errorCorrection.label')}
              </label>
              <select
                value={errorCorrection}
                onChange={(e) => onErrorCorrectionChange(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                className="w-full px-4 py-2 rounded-lg border-2 border-primary 
                         surface-elevated text-primary
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                         transition-all duration-200"
              >
                <option value="L">{t('customization.errorCorrection.low')}</option>
                <option value="M">{t('customization.errorCorrection.medium')}</option>
                <option value="Q">{t('customization.errorCorrection.quartile')}</option>
                <option value="H">{t('customization.errorCorrection.high')}</option>
              </select>
              <p className="text-xs text-secondary mt-2">
                {t('customization.errorCorrection.description')}
              </p>
            </div>

            <div>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeMargin}
                  onChange={(e) => onMarginChange(e.target.checked)}
                  className="w-4 h-4 text-blue-600 surface border-primary rounded 
                           focus:ring-blue-500 focus:ring-2"
                />
                <span className="ml-3 text-sm font-semibold text-primary">
                  {t('customization.margin')}
                </span>
              </label>
              <p className="text-xs text-secondary mt-2 ml-7">
                {/* Add margin around QR code (recommended) */}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}