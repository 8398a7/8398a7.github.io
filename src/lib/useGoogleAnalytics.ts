import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

export const useGoogleAnalytics = () => {
  const location = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const pagePath = `${location.pathname}${location.search}`;

    if (previousPath.current === pagePath) {
      return;
    }

    previousPath.current = pagePath;
    ReactGA.set({ page: pagePath });
    ReactGA.pageview(pagePath);
  }, [location]);
};

export default useGoogleAnalytics;
