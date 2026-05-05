import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(({ request, url }, next) => {
  // Nur vom Root weiterleiten
  if (url.pathname === '/') {
    const country = request.headers.get('cf-ipcountry') ?? '';
    const germanSpeaking = ['DE', 'AT', 'CH', 'LI'];
    const lang = germanSpeaking.includes(country) ? 'de' : 'en';
    
    return Response.redirect(new URL(`/${lang}/`, url), 302);
  }

  return next();
});