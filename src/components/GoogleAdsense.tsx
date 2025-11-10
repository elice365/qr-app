'use client'

import { useEffect, useRef, useState } from 'react';

interface GoogleAdsenseProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

export default function GoogleAdsense({ 
  slot, 
  format = 'auto', 
  responsive = true,
  style 
}: GoogleAdsenseProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only push ads if mounted and element exists
    if (mounted && adRef.current) {
      try {
        // Check if this element already has an ad
        const hasAd = adRef.current.getAttribute('data-adsbygoogle-status');
        if (!hasAd) {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [mounted]);

  // Return empty div during SSR to prevent hydration mismatch
  if (!mounted) {
    return <div style={style || { display: 'block' }} />;
  }

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={style || { display: 'block' }}
      data-ad-client="ca-pub-2536194114435637"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? 'true' : 'false'}
    />
  );
}