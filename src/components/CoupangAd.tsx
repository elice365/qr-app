'use client';

import { useEffect, useState } from 'react';

export default function CoupangAd() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mt-6 flex justify-center">
        <div className="surface rounded-lg animate-pulse" style={{ width: '300px', height: '300px' }} />
      </div>
    );
  }

  return (
    <div className="mt-6 flex justify-center">
      <div className="surface-elevated p-3 rounded-lg shadow-md">
        <iframe 
          title="Coupang Partners Advertisement"
          src="https://ads-partners.coupang.com/widgets.html?id=804169&template=carousel&trackingCode=AF4050280&subId=&width=300&height=300&tsource=" 
          width="300" 
          height="300" 
          style={{ border: 'none', overflow: 'hidden' }}
          referrerPolicy="unsafe-url"
        />
      </div>
    </div>
  );
}