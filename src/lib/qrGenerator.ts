import QRCodeStyling from 'qr-code-styling';
import { QRCodeOptions, WiFiOptions, VCardOptions, EmailOptions, SMSOptions } from '@/types/qr';

export class QRGenerator {
  static async generateDataURL(options: QRCodeOptions): Promise<string> {
    const content = this.formatContent(options);
    
    console.log('QR Options - pattern:', options.pattern, 'borderStyle:', options.borderStyle, 'centerStyle:', options.centerStyle); // 디버깅용
    
    // 패턴을 qr-code-styling의 도트 타입으로 매핑
    // 지원 타입: "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded"
    const dotsTypeMap: { [key: string]: string } = {
      'square': 'square',
      'dots': 'dots',
      'rounded': 'rounded',
      'extra-rounded': 'extra-rounded',
      'classy': 'classy',
      'classy-rounded': 'classy-rounded',
      'sharp': 'square',  // diamond는 지원 안 함
      'smooth': 'rounded'
    };

    // 코너 스타일 매핑 (qr-code-styling 실제 작동 값만 사용)
    // 실제 작동하는 값: "dot" | "square" | "extra-rounded"
    const cornerSquareTypeMap: { [key: string]: string } = {
      'square': 'square',
      'dot': 'dot',
      'extra-rounded': 'extra-rounded',
    };

    // 센터 스타일 매핑 (qr-code-styling 실제 작동 값만 사용)
    // 실제 작동하는 값: "dot" | "square"
    const cornerDotTypeMap: { [key: string]: string } = {
      'square': 'square',
      'dot': 'dot',
    };

    const qrCode = new QRCodeStyling({
      width: options.size,
      height: options.size,
      data: content,
      margin: options.includeMargin ? 10 : 0,
      qrOptions: {
        errorCorrectionLevel: options.errorCorrection === 'L' ? 'L' :
                             options.errorCorrection === 'M' ? 'M' :
                             options.errorCorrection === 'Q' ? 'Q' : 'H'
      },
      dotsOptions: {
        color: options.fgColor,
        type: dotsTypeMap[options.pattern || 'square'] as any || 'square'
      },
      backgroundOptions: {
        color: options.bgColor
      },
      cornersSquareOptions: {
        color: options.borderColor || options.fgColor,
        type: cornerSquareTypeMap[options.borderStyle || 'square'] as any || 'square'
      },
      cornersDotOptions: {
        color: options.borderColor || options.fgColor,
        type: cornerDotTypeMap[options.centerStyle || 'square'] as any || 'square'
      }
    });

    return new Promise((resolve) => {
      qrCode.getRawData('png').then((blob) => {
        if (blob && blob instanceof Blob) {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
          reader.readAsDataURL(blob);
        }
      });
    });
  }

  static async generateSVG(options: QRCodeOptions): Promise<string> {
    const content = this.formatContent(options);
    
    // 패턴을 qr-code-styling의 도트 타입으로 매핑
    // 지원 타입: "dots" | "rounded" | "classy" | "classy-rounded" | "square" | "extra-rounded"
    const dotsTypeMap: { [key: string]: string } = {
      'square': 'square',
      'dots': 'dots',
      'rounded': 'rounded',
      'extra-rounded': 'extra-rounded',
      'classy': 'classy',
      'classy-rounded': 'classy-rounded',
      'sharp': 'square',  // diamond는 지원 안 함
      'smooth': 'rounded'
    };

    // 코너 스타일 매핑 (qr-code-styling 실제 작동 값만 사용)
    // 실제 작동하는 값: "dot" | "square" | "extra-rounded"
    const cornerSquareTypeMap: { [key: string]: string } = {
      'square': 'square',
      'dot': 'dot',
      'extra-rounded': 'extra-rounded',
    };

    // 센터 스타일 매핑 (qr-code-styling 실제 작동 값만 사용)
    // 실제 작동하는 값: "dot" | "square"
    const cornerDotTypeMap: { [key: string]: string } = {
      'square': 'square',
      'dot': 'dot',
    };

    const qrCode = new QRCodeStyling({
      width: options.size,
      height: options.size,
      data: content,
      margin: options.includeMargin ? 10 : 0,
      qrOptions: {
        errorCorrectionLevel: options.errorCorrection === 'L' ? 'L' :
                             options.errorCorrection === 'M' ? 'M' :
                             options.errorCorrection === 'Q' ? 'Q' : 'H'
      },
      dotsOptions: {
        color: options.fgColor,
        type: dotsTypeMap[options.pattern || 'square'] as any || 'square'
      },
      backgroundOptions: {
        color: options.bgColor
      },
      cornersSquareOptions: {
        color: options.borderColor || options.fgColor,
        type: cornerSquareTypeMap[options.borderStyle || 'square'] as any || 'square'
      },
      cornersDotOptions: {
        color: options.borderColor || options.fgColor,
        type: cornerDotTypeMap[options.centerStyle || 'square'] as any || 'square'
      }
    });

    return new Promise((resolve) => {
      qrCode.getRawData('svg').then((blob) => {
        if (blob && blob instanceof Blob) {
          const reader = new FileReader();
          reader.onloadend = () => {
            // SVG의 경우 base64를 디코드하여 실제 SVG 문자열 반환
            const base64 = (reader.result as string).split(',')[1];
            const svg = atob(base64);
            resolve(svg);
          };
          reader.readAsDataURL(blob);
        }
      });
    });
  }

  private static formatContent(options: QRCodeOptions): string {
    switch (options.type) {
      case 'url':
        return options.content.startsWith('http') ? options.content : `https://${options.content}`;
      
      case 'text':
        return options.content;
      
      case 'email':
        const emailData = JSON.parse(options.content) as EmailOptions;
        return `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject || '')}&body=${encodeURIComponent(emailData.body || '')}`;
      
      case 'sms':
        const smsData = JSON.parse(options.content) as SMSOptions;
        return `sms:${smsData.phone}${smsData.message ? `?body=${encodeURIComponent(smsData.message)}` : ''}`;
      
      case 'wifi':
        const wifiData = JSON.parse(options.content) as WiFiOptions;
        return `WIFI:T:${wifiData.encryption};S:${wifiData.ssid};P:${wifiData.password};H:${wifiData.hidden ? 'true' : 'false'};;`;
      
      case 'vcard':
        const vcardData = JSON.parse(options.content) as VCardOptions;
        return this.generateVCard(vcardData);
      
      case 'bitcoin':
        return `bitcoin:${options.content}`;
      
      case 'twitter':
        return `https://twitter.com/${options.content}`;
      
      case 'facebook':
        return `https://facebook.com/${options.content}`;
      
      case 'pdf':
        return options.content.startsWith('http') ? options.content : `https://${options.content}`;
      
      case 'mp3':
        return options.content.startsWith('http') ? options.content : `https://${options.content}`;
      
      case 'appstore':
        return options.content.startsWith('http') ? options.content : `https://${options.content}`;
      
      case 'image':
        return options.content.startsWith('http') ? options.content : `https://${options.content}`;
      
      default:
        return options.content;
    }
  }

  private static generateVCard(data: VCardOptions): string {
    let vcard = 'BEGIN:VCARD\nVERSION:3.0\n';
    vcard += `FN:${data.firstName} ${data.lastName}\n`;
    vcard += `N:${data.lastName};${data.firstName};;;\n`;
    
    if (data.organization) vcard += `ORG:${data.organization}\n`;
    if (data.phone) vcard += `TEL:${data.phone}\n`;
    if (data.email) vcard += `EMAIL:${data.email}\n`;
    if (data.url) vcard += `URL:${data.url}\n`;
    if (data.address) vcard += `ADR:;;${data.address};;;;\n`;
    
    vcard += 'END:VCARD';
    return vcard;
  }

  static downloadQR(dataUrl: string, filename: string = 'qrcode', format: 'png' | 'svg' = 'png') {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `${filename}.${format}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  static async downloadAsPNG(options: QRCodeOptions, filename: string = 'qrcode') {
    const dataUrl = await this.generateDataURL(options);
    this.downloadQR(dataUrl, filename, 'png');
  }

  static async downloadAsSVG(options: QRCodeOptions, filename: string = 'qrcode') {
    const svg = await this.generateSVG(options);
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    this.downloadQR(url, filename, 'svg');
    URL.revokeObjectURL(url);
  }
}