export type QRType = 
  | 'url' 
  | 'text' 
  | 'email' 
  | 'sms' 
  | 'wifi' 
  | 'vcard' 
  | 'bitcoin' 
  | 'twitter' 
  | 'facebook' 
  | 'pdf' 
  | 'mp3' 
  | 'appstore' 
  | 'image';

export interface QRTypeOption {
  id: QRType;
  label: string;
  icon: string;
  description: string;
}

export interface QRCodeOptions {
  type: QRType;
  content: string;
  size: number;
  fgColor: string;
  bgColor: string;
  errorCorrection: 'L' | 'M' | 'Q' | 'H';
  includeMargin: boolean;
  logoUrl?: string;
  frameStyle?: number;
  cornerSquareStyle?: string;
  cornerDotStyle?: string;
  pattern?: string; // Pattern style (dots, rounded, square, etc.)
  borderColor?: string; // Border color
  borderStyle?: string; // Border style (round, square, diamond, etc.)
  centerStyle?: string; // Center style (circle, square, diamond, etc.)
}

export interface WiFiOptions {
  ssid: string;
  password: string;
  encryption: 'WPA' | 'WEP' | 'nopass';
  hidden: boolean;
}

export interface VCardOptions {
  firstName: string;
  lastName: string;
  organization?: string;
  phone?: string;
  email?: string;
  url?: string;
  address?: string;
}

export interface EmailOptions {
  to: string;
  subject?: string;
  body?: string;
}

export interface SMSOptions {
  phone: string;
  message?: string;
}