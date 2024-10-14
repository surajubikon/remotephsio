// ScrollRestoration.js
import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const location = useLocation();

  useEffect(() => {
    return () => {
      const scrollPosition = {
        x: window.scrollX,
        y: window.scrollY,
      };
      sessionStorage.setItem('scrollPosition-' + location.key, JSON.stringify(scrollPosition));
    };
  }, [location]);

  useLayoutEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition-' + location.key);
    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      window.scrollTo(x, y);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}
