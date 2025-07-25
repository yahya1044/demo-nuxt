// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/demo-nuxt/' : '/',
    head: {
      title: 'Kollel App',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href:
            'data:image/svg+xml,' +
            encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
                <rect x="0" y="0" width="64" height="64" rx="12" ry="12" fill="#4f39f6" />
                <text x="50%" y="50%" font-size="32" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="central">
                  K
                </text>
              </svg>
            `),
        },
      ],
    }
  },
  runtimeConfig: {
    // Expose public environment variables to both client and server
    public: {
      API_URL: process.env.API_URL || 'https://kollelsys.com',
    },
  },
  nitro: {
    preset: 'github_pages',
  },
  ui: {
    colorMode: false
  }
})
