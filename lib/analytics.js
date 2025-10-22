// Analytics utility functions

/**
 * Send a custom event to Google Analytics
 * @param {string} action - The action being taken (e.g., 'click', 'view')
 * @param {string} category - The category of the event (e.g., 'Navigation', 'CTA', 'External Link')
 * @param {string} label - The label for the event (e.g., 'Discord Link', 'Hero CTA')
 * @param {number} value - Optional numeric value
 */
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    console.log('📊 Analytics:', { action, category, label });
  }
};

/**
 * Automatically detect and track link/button clicks
 * This function analyzes the clicked element and sends appropriate tracking
 * @param {HTMLElement} element - The clicked element
 */
export const autoTrackClick = (element) => {
  if (!element) return;

  // Get the most relevant text content
  const getText = (el) => {
    // Try data-track-label first
    if (el.getAttribute('data-track-label')) {
      return el.getAttribute('data-track-label');
    }
    // Try aria-label
    if (el.getAttribute('aria-label')) {
      return el.getAttribute('aria-label');
    }
    // Try alt text for images
    const img = el.querySelector('img');
    if (img && img.alt) {
      return img.alt;
    }
    // Get text content, trimmed
    return el.textContent?.trim() || 'Unknown';
  };

  // Determine if it's an external link
  const href = element.href || element.closest('a')?.href;
  const isExternal = href && !href.includes(window.location.hostname) && (href.startsWith('http') || href.startsWith('//'));
  
  // Determine category based on element characteristics
  let category = 'Click';
  let label = getText(element);

  // Check for specific patterns
  if (element.closest('[data-section]')) {
    const sectionName = element.closest('[data-section]').getAttribute('data-section');
    category = `Section: ${sectionName}`;
  } else if (href) {
    if (isExternal) {
      category = 'External Link';
      // Extract platform/domain from URL
      try {
        const url = new URL(href);
        const domain = url.hostname.replace('www.', '');
        
        // Detect common platforms
        if (domain.includes('twitter.com') || domain.includes('x.com')) {
          category = 'Social: Twitter';
        } else if (domain.includes('discord')) {
          category = 'Social: Discord';
        } else if (domain.includes('github.com')) {
          category = 'Social: GitHub';
        } else if (domain.includes('youtube.com')) {
          category = 'Social: YouTube';
        } else if (domain.includes('telegram')) {
          category = 'Social: Telegram';
        } else {
          category = 'External Link: ' + domain;
        }
      } catch (e) {
        category = 'External Link';
      }
    } else if (href.includes('/hall-of-fame')) {
      category = 'Internal: Hall of Fame';
    } else if (href.startsWith('/')) {
      category = 'Internal Navigation';
    }
  } else if (element.tagName === 'BUTTON' || element.closest('button')) {
    category = 'Button';
    // Check if it's a CTA button
    if (label.toLowerCase().includes('unirse') || 
        label.toLowerCase().includes('join') || 
        label.toLowerCase().includes('empezar') ||
        label.toLowerCase().includes('comenzar')) {
      category = 'CTA Button';
    }
  }

  trackEvent('click', category, label);
};

/**
 * Initialize global click tracking
 * Call this once in your app to automatically track all clicks
 */
export const initAutoTracking = () => {
  if (typeof window === 'undefined') return;

  // Track all clicks on links and buttons
  document.addEventListener('click', (e) => {
    const target = e.target;
    
    // Find the closest clickable element (a, button, or role="button")
    const clickable = target.closest('a, button, [role="button"]');
    
    if (clickable) {
      autoTrackClick(clickable);
    }
  }, true); // Use capture phase to catch all clicks

  console.log('📊 Auto-tracking initialized');
};

/**
 * Track theme toggle
 * @param {string} theme - The theme being switched to ('light' or 'dark')
 */
export const trackThemeToggle = (theme) => {
  trackEvent('toggle', 'Theme', theme);
};
