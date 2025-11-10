// Google AdSense Configuration
export const ADSENSE_CONFIG = {
  // Your AdSense Publisher ID
  publisherId: 'ca-pub-2536194114435637',
  
  // Ad Slot IDs - Replace these with your actual ad slot IDs from Google AdSense
  adSlots: {
    // Horizontal banner ads (728x90 or responsive)
    topBanner: 'YOUR_AD_SLOT_ID_1',
    bottomBanner: 'YOUR_AD_SLOT_ID_3',
    
    // Rectangle ads (336x280 or responsive)
    middleRectangle: 'YOUR_AD_SLOT_ID_2',
    sidebarRectangle: 'YOUR_AD_SLOT_ID_4',
    
    // Square ads (250x250 or responsive)
    inArticleSquare: 'YOUR_AD_SLOT_ID_5',
    
    // Mobile ads (320x50 or responsive)
    mobileBanner: 'YOUR_AD_SLOT_ID_6',
  },
  
  // Ad display settings
  settings: {
    // Enable/disable ads globally
    enabled: true,
    
    // Test mode - shows placeholder ads instead of real ones
    testMode: false,
    
    // Delay before loading ads (milliseconds)
    loadDelay: 0,
  }
};

// Helper function to get ad slot by name
export function getAdSlot(slotName: keyof typeof ADSENSE_CONFIG.adSlots): string {
  return ADSENSE_CONFIG.adSlots[slotName];
}

// Helper function to check if ads are enabled
export function areAdsEnabled(): boolean {
  return ADSENSE_CONFIG.settings.enabled && !ADSENSE_CONFIG.settings.testMode;
}