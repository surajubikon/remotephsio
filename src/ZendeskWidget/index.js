// src/ZendeskChatWidget.js
import { useEffect } from 'react';

const ZendeskChatWidget = () => {
  useEffect(() => {
    // Check if the widget is already loaded
    if (document.getElementById('ze-snippet')) return;

    // Create the script element
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=0b5ec798-60f7-4b35-91b0-77e4d95a0236';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: Remove script on unmount
    return () => {
      const existingScript = document.getElementById('ze-snippet');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn’t need a visible UI
};

export default ZendeskChatWidget;
