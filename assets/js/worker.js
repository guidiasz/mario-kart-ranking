async function registerServiceWorker() {
  if (!'ServiceWorker' in navigator) return;
  try {
    const registration = await navigator.serviceWorker.register('/sw.js', { scope: '/' });
    if (registration.installing) {
      console.log('Service worker installing');
    } else if (registration.waiting) {
      console.log('Service worker installed');
    } else if (registration.active) {
      console.log('Service worker active');
    }
  } catch (err) {
    console.error(`Register Failed: ${err}`);
  }
}

registerServiceWorker();
