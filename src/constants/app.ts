// App Constants
export const APP_CONFIG = {
  name: 'QR Code Generator',
  version: '1.0.0',
  author: 'Your Company',
  year: 2025,
};

// QR Code Trademark Notice
export const QR_TRADEMARK = {
  notice: "QR Code® is a registered trademark of DENSO WAVE INCORPORATED",
  noticeKo: "QR Code®는 DENSO WAVE INCORPORATED의 등록 상표입니다",
  noticeJa: "QR Code®はデンソーウェーブの登録商標です",
  noticeRu: "QR Code® является зарегистрированной торговой маркой DENSO WAVE INCORPORATED",
};

// QR Code Generation Settings
export const QR_SETTINGS = {
  defaultSize: 300,
  minSize: 100,
  maxSize: 1000,
  defaultMargin: true,
  defaultErrorCorrection: 'M' as const,
};

// Color Defaults
export const COLOR_DEFAULTS = {
  foreground: '#000000',
  background: '#FFFFFF',
  border: '#000000',
};

// Pattern Styles Available
export const PATTERN_STYLES = ['square', 'dots', 'rounded', 'extra-rounded', 'classy', 'classy-rounded', 'sharp', 'smooth'] as const;
export const BORDER_STYLES = ['square', 'dot', 'extra-rounded'] as const;
export const CENTER_STYLES = ['square', 'dot'] as const;

// QR Types
export const QR_TYPES = [
  'url', 'text', 'email', 'sms', 'wifi', 'vcard', 
  'bitcoin', 'twitter', 'facebook', 'pdf', 'mp3', 
  'appstore', 'image'
] as const;