'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { QRType } from '@/types/qr';

interface QRTypeSelectorProps {
  selectedType: QRType;
  onTypeSelect: (type: QRType) => void;
}

export default function QRTypeSelector({ selectedType, onTypeSelect }: QRTypeSelectorProps) {
  const t = useTranslations();
  
  const qrTypes = [
    { 
      id: 'url', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" 
                fill={selectedType === 'url' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'text', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" 
                fill={selectedType === 'text' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'email', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" 
                fill={selectedType === 'email' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'sms', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M20,16H6L4,18V4H20V16Z" 
                fill={selectedType === 'sms' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'wifi', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z" 
                fill={selectedType === 'wifi' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'vcard', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" 
                fill={selectedType === 'vcard' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'bitcoin', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M15.84,12.2C15.66,13.27 14.93,13.7 14,14.1L14.4,15.8L13.6,16L13.2,14.28C13,14.33 12.78,14.39 12.56,14.44L13,16.16L12.16,16.37L11.76,14.67C11.6,14.71 11.42,14.75 11.25,14.79L11.25,14.8L10.1,15.12L9.84,14.24C9.84,14.24 10.4,14.09 10.39,14.08C10.7,14 10.78,13.82 10.75,13.68L10.27,11.74C10.29,11.73 10.32,11.72 10.36,11.7L10.27,11.73L9.61,8.82C9.56,8.69 9.41,8.5 9.1,8.57C9.11,8.56 8.55,8.71 8.55,8.71L8.1,7.74L9.32,7.41C9.52,7.36 9.72,7.31 9.91,7.26L9.51,5.53L10.35,5.32L10.75,7.04C10.97,6.99 11.2,6.94 11.42,6.89L11.02,5.18L11.86,5L12.26,6.72C13.5,6.46 14.43,6.6 14.85,7.65C15.18,8.5 14.9,9 14.28,9.35C14.77,9.5 15.12,9.84 15.84,12.2M13.12,8.19C12.86,7.22 11.7,7.59 11.15,7.71L11.47,9.07C12,8.95 13.38,9.16 13.12,8.19M13.63,12.15C13.32,10.96 11.87,11.4 11.19,11.56L11.57,13.15C12.25,13 14.95,13.34 13.63,12.15Z" 
                fill={selectedType === 'bitcoin' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'twitter', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                fill={selectedType === 'twitter' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'facebook', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" 
                fill={selectedType === 'facebook' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'pdf', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" 
                fill={selectedType === 'pdf' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'mp3', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" 
                fill={selectedType === 'mp3' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'appstore', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M7,3H17A4,4 0 0,1 21,7V17A4,4 0 0,1 17,21H7A4,4 0 0,1 3,17V7A4,4 0 0,1 7,3M7,5A2,2 0 0,0 5,7V17A2,2 0 0,0 7,19H17A2,2 0 0,0 19,17V7A2,2 0 0,0 17,5H7M8,8H16V16H8V8M10,10V14H14V10H10Z" 
                fill={selectedType === 'appstore' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
    { 
      id: 'image', 
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" 
                fill={selectedType === 'image' ? 'rgb(var(--color-primary))' : 'rgb(var(--color-text-secondary))'} />
        </svg>
      )
    },
  ] as const;
  
  return (
    <div className="w-full">
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-4 sm:mb-6">
        1. {t('steps.selectType.title')}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
        {qrTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onTypeSelect(type.id)}
            className={`
              relative p-3 sm:p-4 rounded-lg border-2 transition-all duration-200
              hover:scale-105 hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))] focus:ring-offset-2
              ${selectedType === type.id
                ? 'border-primary surface-elevated shadow-md scale-105'
                : 'surface hover:shadow-md'
              }
            `}
            aria-label={t(`qrTypes.${type.id}.label`)}
          >
            {selectedType === type.id && (
              <div className="absolute top-1 right-1 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[rgb(var(--color-primary))] rounded-full" />
            )}
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 mb-2 relative">
                {type.icon}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-primary">
                {t(`qrTypes.${type.id}.label`)}
              </div>
              <div className="text-[10px] sm:text-xs text-secondary mt-1">
                {t(`qrTypes.${type.id}.description`)}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}