// 'use client'

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';

// const Preloader = () => {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChangeStart = () => {
//       setLoading(true);
//     };

//     const handleRouteChangeComplete = () => {
//       setTimeout(() => setLoading(false), 2000); // Adjust the timeout duration as needed
//     };

//     if (router.isReady) {
//       router.events.on('routeChangeStart', handleRouteChangeStart);
//       router.events.on('routeChangeComplete', handleRouteChangeComplete);
//       router.events.on('routeChangeError', handleRouteChangeComplete);
//     }

//     // Clean up event listeners on component unmount
//     return () => {
//       if (router.isReady) {
//         router.events.off('routeChangeStart', handleRouteChangeStart);
//         router.events.off('routeChangeComplete', handleRouteChangeComplete);
//         router.events.off('routeChangeError', handleRouteChangeComplete);
//       }
//     };
//   }, [router.isReady]); // Ensure the effect runs only when the router is ready

//   return loading ? <div id="preloader"></div> : null;
// };

// export default Preloader;
