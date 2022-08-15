/** @type {import('next').NextConfig} */

// Looking to run app as a `next export` project? Keep the below!

module.exports = {
  reactStrictMode: true,
}

// Looking to run app as a server? Uncomment the below!

// const securityHeaders = [
//   {
//     key: 'X-DNS-Prefetch-Control',
//     value: 'on',
//   },
//   {
//     key: 'Strict-Transport-Security',
//     value: 'max-age=63072000; includeSubDomains; preload',
//   },
//   {
//     key: 'X-XSS-Protection',
//     value: '1; mode=block',
//   },
//   {
//     key: 'X-Frame-Options',
//     value: 'SAMEORIGIN',
//   },
//   {
//     key: 'Permissions-Policy',
//     value: 'camera=(), microphone=(), geolocation=()',
//   },
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff',
//   },
//   {
//     key: 'Referrer-Policy',
//     value: 'strict-origin-when-cross-origin',
//   },
// ]
// module.exports = {
//   i18n: {
//     locales: ['en'],
//     defaultLocale: 'en',
//   },
//   reactStrictMode: true,
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }
