// components/PageLoader.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation'; // Track route changes in App Router
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const PageLoader = () => {
  const pathname = usePathname(); // Hook to track pathname changes

  useEffect(() => {
    NProgress.start(); // Start the loader when the route starts to change

    // Ensure the loader stops once the page has finished loading
    const timer = setTimeout(() => {
      NProgress.done(); // Stop the loader after the route change completes
    }, 500); // Optional delay to show loader for at least 500ms

    return () => {
      clearTimeout(timer); // Cleanup the timer if the component unmounts
      NProgress.done(); // Stop the loader in case of interruptions
    };
  }, [pathname]); // Re-run effect when the route (pathname) changes

  return null; // No visual component is rendered
};

export default PageLoader;
