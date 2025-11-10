'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { QRType, WiFiOptions, VCardOptions, EmailOptions, SMSOptions } from '@/types/qr';

interface QRContentInputProps {
  type: QRType;
  onContentChange: (content: string) => void;
}

export default function QRContentInput({ type, onContentChange }: QRContentInputProps) {
  const t = useTranslations();
  const [urlContent, setUrlContent] = useState<string>('');
  const [textContent, setTextContent] = useState<string>('');
  const [emailData, setEmailData] = useState<EmailOptions>(() => ({ to: '', subject: '', body: '' }));
  const [smsData, setSmsData] = useState<SMSOptions>(() => ({ phone: '', message: '' }));
  const [wifiData, setWifiData] = useState<WiFiOptions>(() => ({ 
    ssid: '', 
    password: '', 
    encryption: 'WPA', 
    hidden: false 
  }));
  const [vcardData, setVcardData] = useState<VCardOptions>(() => ({
    firstName: '',
    lastName: '',
    organization: '',
    phone: '',
    email: '',
    url: '',
    address: ''
  }));
  const [bitcoinAddress, setBitcoinAddress] = useState<string>('');
  const [socialHandle, setSocialHandle] = useState<string>('');

  const handleContentUpdate = (content: string) => {
    onContentChange(content);
  };

  useEffect(() => {
    // Reset content when type changes
    onContentChange('');
    // Reset all form states
    setUrlContent('');
    setTextContent('');
    setEmailData({ to: '', subject: '', body: '' });
    setSmsData({ phone: '', message: '' });
    setWifiData({ ssid: '', password: '', encryption: 'WPA', hidden: false });
    setVcardData({
      firstName: '',
      lastName: '',
      organization: '',
      phone: '',
      email: '',
      url: '',
      address: ''
    });
    setBitcoinAddress('');
    setSocialHandle('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  const renderInput = () => {
    switch (type) {
      case 'url':
        return (
          <div className="form-group">
            <label className="form-label required">{t('qrTypes.url.inputLabel')}</label>
            <div className="input-with-icon">
              <input
                type="url"
                placeholder="https://example.com"
                value={urlContent || ''}
                onChange={(e) => {
                  setUrlContent(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-field"
                suppressHydrationWarning
              />
              <Image
                src="/link.svg"
                alt="URL"
                width={20}
                height={20}
                className="input-icon-left"
              />
            </div>
            <p className="form-helper">{t('qrTypes.url.helper')}</p>
          </div>
        );

      case 'text':
        return (
          <div className="form-group">
            <label className="form-label required">{t('qrTypes.text.inputLabel')}</label>
            <div className="textarea-wrapper">
              <textarea
                placeholder={t('qrTypes.text.placeholder')}
                value={textContent || ''}
                onChange={(e) => {
                  setTextContent(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-field"
                rows={4}
                suppressHydrationWarning
              />
              <span className="textarea-counter">
                {textContent.length} / 2953
              </span>
            </div>
            <p className="form-helper">{t('qrTypes.text.helper')}</p>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-4">
            <div className="form-group">
              <label className="form-label required">{t('qrTypes.email.inputLabel')}</label>
              <div className="input-with-icon">
                <input
                  type="email"
                  placeholder={t('qrTypes.email.to')}
                  value={emailData.to || ''}
                  onChange={(e) => {
                    const newData = { ...emailData, to: e.target.value };
                    setEmailData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-field"
                  suppressHydrationWarning
                />
                <Image
                  src="/mail.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="input-icon-left"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder={t('qrTypes.email.subject')}
                value={emailData.subject || ''}
                onChange={(e) => {
                  const newData = { ...emailData, subject: e.target.value };
                  setEmailData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="input-field"
                suppressHydrationWarning
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder={t('qrTypes.email.body')}
                value={emailData.body || ''}
                onChange={(e) => {
                  const newData = { ...emailData, body: e.target.value };
                  setEmailData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="input-field"
                rows={3}
                suppressHydrationWarning
              />
            </div>
          </div>
        );

      case 'sms':
        return (
          <div className="space-y-4">
            <label className="input-label">{t('qrTypes.sms.inputLabel')}</label>
            <div className="input-group">
              <div className="relative">
                <input
                  type="tel"
                  placeholder={t('qrTypes.sms.phone')}
                  value={smsData.phone || ''}
                  onChange={(e) => {
                    const newData = { ...smsData, phone: e.target.value };
                    setSmsData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium with-icon"
                />
                <Image
                  src="/sms.svg"
                  alt="SMS"
                  width={20}
                  height={20}
                  className="input-icon w-5 h-5"
                />
              </div>
            </div>
            <div className="input-group">
              <textarea
                placeholder={t('qrTypes.email.body')}
                value={smsData.message || ''}
                onChange={(e) => {
                  const newData = { ...smsData, message: e.target.value };
                  setSmsData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="input-premium"
                rows={3}
              />
            </div>
          </div>
        );

      case 'wifi':
        return (
          <div className="space-y-4">
            <label className="form-label">{t('qrTypes.wifi.inputLabel')}</label>
            <div className="form-group">
              <div className="input-with-icon">
                <input
                  type="text"
                  placeholder={t('qrTypes.wifi.ssid')}
                  value={wifiData.ssid || ''}
                  onChange={(e) => {
                    const newData = { ...wifiData, ssid: e.target.value };
                    setWifiData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-field"
                  suppressHydrationWarning
                />
                <Image
                  src="/wifi.svg"
                  alt="WiFi"
                  width={20}
                  height={20}
                  className="input-icon-left"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="relative">
                <input
                  type="password"
                  placeholder={t('qrTypes.wifi.password')}
                  value={wifiData.password || ''}
                  onChange={(e) => {
                    const newData = { ...wifiData, password: e.target.value };
                    setWifiData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium with-icon"
                />
                <svg className="input-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>
            <div className="input-group">
              <select
                value={wifiData.encryption || 'WPA'}
                onChange={(e) => {
                  const newData = { ...wifiData, encryption: e.target.value as 'WPA' | 'WEP' | 'nopass' };
                  setWifiData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="input-premium"
              >
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">{t('qrTypes.wifi.noPassword')}</option>
              </select>
            </div>
            <label className="flex items-center cursor-pointer hover:surface p-3 rounded-lg transition-colors">
              <input
                type="checkbox"
                checked={wifiData.hidden}
                onChange={(e) => {
                  const newData = { ...wifiData, hidden: e.target.checked };
                  setWifiData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="w-5 h-5 text-blue-600 surface border-primary rounded focus:ring-blue-500 focus:ring-2 mr-3"
              />
              <span className="text-sm font-medium text-primary">{t('qrTypes.wifi.hidden')}</span>
            </label>
          </div>
        );

      case 'vcard':
        return (
          <div className="space-y-4">
            <label className="input-label">{t('qrTypes.vcard.inputLabel')}</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="input-group">
                <input
                  type="text"
                  placeholder={t('qrTypes.vcard.firstName')}
                  value={vcardData.firstName || ''}
                  onChange={(e) => {
                    const newData = { ...vcardData, firstName: e.target.value };
                    setVcardData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium"
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  placeholder={t('qrTypes.vcard.lastName')}
                  value={vcardData.lastName || ''}
                  onChange={(e) => {
                    const newData = { ...vcardData, lastName: e.target.value };
                    setVcardData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t('qrTypes.vcard.organization')}
                  value={vcardData.organization || ''}
                  onChange={(e) => {
                    const newData = { ...vcardData, organization: e.target.value };
                    setVcardData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium with-icon"
                />
                <Image
                  src="/vcard.svg"
                  alt="vCard"
                  width={20}
                  height={20}
                  className="input-icon w-5 h-5"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="relative">
                <input
                  type="tel"
                  placeholder={t('qrTypes.vcard.phone')}
                  value={vcardData.phone || ''}
                  onChange={(e) => {
                    const newData = { ...vcardData, phone: e.target.value };
                    setVcardData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium with-icon"
                />
                <Image
                  src="/sms.svg"
                  alt="Phone"
                  width={20}
                  height={20}
                  className="input-icon w-5 h-5"
                />
              </div>
            </div>
            <div className="input-group">
              <div className="relative">
                <input
                  type="email"
                  placeholder={t('qrTypes.vcard.email')}
                  value={vcardData.email || ''}
                  onChange={(e) => {
                    const newData = { ...vcardData, email: e.target.value };
                    setVcardData(newData);
                    handleContentUpdate(JSON.stringify(newData));
                  }}
                  className="input-premium with-icon"
                />
                <Image
                  src="/mail.svg"
                  alt="Email"
                  width={20}
                  height={20}
                  className="input-icon w-5 h-5"
                />
              </div>
            </div>
            <div className="input-group">
              <input
                type="url"
                placeholder={`${t('qrTypes.vcard.url')} (${t('common.optional')})`}
                value={vcardData.url || ''}
                onChange={(e) => {
                  const newData = { ...vcardData, url: e.target.value };
                  setVcardData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="input-premium"
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                placeholder={`${t('qrTypes.vcard.address')} (${t('common.optional')})`}
                value={vcardData.address || ''}
                onChange={(e) => {
                  const newData = { ...vcardData, address: e.target.value };
                  setVcardData(newData);
                  handleContentUpdate(JSON.stringify(newData));
                }}
                className="input-premium"
              />
            </div>
          </div>
        );

      case 'bitcoin':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.bitcoin.inputLabel')}</label>
            <div className="relative">
              <input
                type="text"
                placeholder={t('qrTypes.bitcoin.placeholder')}
                value={bitcoinAddress || ''}
                onChange={(e) => {
                  setBitcoinAddress(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <Image
                src="/bitcoin.svg"
                alt="Bitcoin"
                width={20}
                height={20}
                className="input-icon w-5 h-5"
              />
            </div>
          </div>
        );

      case 'twitter':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.twitter.inputLabel')}</label>
            <div className="relative">
              <input
                type="text"
                placeholder="@username"
                value={socialHandle || ''}
                onChange={(e) => {
                  setSocialHandle(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <Image
                src="/twitter-x.svg"
                alt="Twitter"
                width={20}
                height={20}
                className="input-icon w-5 h-5"
              />
            </div>
          </div>
        );

      case 'facebook':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.facebook.inputLabel')}</label>
            <div className="relative">
              <input
                type="text"
                placeholder="username"
                value={socialHandle || ''}
                onChange={(e) => {
                  setSocialHandle(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
                className="input-icon w-5 h-5"
              />
            </div>
          </div>
        );

      case 'pdf':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.pdf.inputLabel')}</label>
            <div className="relative">
              <input
                type="url"
                placeholder="https://example.com/document.pdf"
                value={urlContent || ''}
                onChange={(e) => {
                  setUrlContent(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <Image
                src="/pdf.svg"
                alt="PDF"
                width={20}
                height={20}
                className="input-icon w-5 h-5"
              />
            </div>
          </div>
        );

      case 'mp3':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.mp3.inputLabel')}</label>
            <div className="relative">
              <input
                type="url"
                placeholder="https://example.com/music.mp3"
                value={urlContent || ''}
                onChange={(e) => {
                  setUrlContent(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <Image
                src="/mp3.svg"
                alt="MP3"
                width={20}
                height={20}
                className="input-icon w-5 h-5"
              />
            </div>
          </div>
        );

      case 'appstore':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.appstore.inputLabel')}</label>
            <div className="relative">
              <input
                type="url"
                placeholder="https://apps.apple.com/app/id123456789"
                value={urlContent || ''}
                onChange={(e) => {
                  setUrlContent(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <svg
                className="input-icon w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="input-group">
            <label className="input-label">{t('qrTypes.image.inputLabel')}</label>
            <div className="relative">
              <input
                type="url"
                placeholder="https://example.com/image.jpg"
                value={urlContent || ''}
                onChange={(e) => {
                  setUrlContent(e.target.value);
                  handleContentUpdate(e.target.value);
                }}
                className="input-premium with-icon"
              />
              <Image
                src="/image.svg"
                alt="Image"
                width={20}
                height={20}
                className="input-icon w-5 h-5"
              />
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-primary mb-2">{t('common.content')}</label>
            <input
              type="text"
              placeholder={t('common.enterContent')}
              className="input-premium"
            />
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-primary mb-6">2. {t('steps.selectType.contentTitle')}</h3>
      {renderInput()}
    </div>
  );
}