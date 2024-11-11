// src/components/GoogleAnalytics.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = ({ trackingId }) => {
  const location = useLocation();

  useEffect(() => {
    // Load the Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
    document.head.appendChild(script);

    // Initialize Google Analytics
    const scriptConfig = document.createElement('script');
    scriptConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${trackingId}');
    `;
    document.head.appendChild(scriptConfig);

    // Cleanup: Remove scripts on unmount
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(scriptConfig);
    };
  }, [trackingId]);

  // Track page views on route change
  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', trackingId, { page_path: location.pathname });
    }
  }, [location, trackingId]);

  return null;
};

export default GoogleAnalytics;
