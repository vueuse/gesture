// @ts-check

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: '@vueuse/gesture',
  description: '🕹 Vue Composables making your app interactive',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'author', content: 'Yaël GUILLOUX' }],
    ['meta', { property: 'og:title', content: '@vueuse/gesture' }],
    [
      'meta',
      {
        property: 'og:description',
        content: '🕹 Vue Composables making your app interactive',
      },
    ],
    [
      'meta',
      {
        property: 'og:image',
        content: 'https://gesture.vueuse.org/logo.svg',
      },
    ],
    ['meta', { name: 'twitter:creator', content: '@yaeeelglx' }],
    [
      'meta',
      { name: 'twitter:image', content: 'https://gesture.vueuse.org/logo.svg' },
    ],
  ],
  themeConfig: {
    repo: 'vueuse/gesture',
    sidebar: [
      {
        text: 'Getting Started',
        children: [
          {
            text: 'Introduction',
            link: '/introduction',
          },
          {
            text: 'Installation',
            link: '/installation',
          },
          {
            text: 'Quick Start',
            link: '/quick-start',
          },
          {
            text: 'Roadmap',
            link: '/roadmap',
          },
          {
            text: 'Demo',
            link: '/demo',
          },
        ],
      },
      {
        text: 'Features',
        children: [
          {
            text: 'Drag',
            link: '/presets',
          },
          {
            text: 'Move',
            link: '/directive-usage',
          },
          {
            text: 'Hover',
            link: '/composable-usage',
          },
          {
            text: 'Scroll',
            link: '/motion-properties',
          },
          {
            text: 'Wheel',
            link: '/transition-properties',
          },
          {
            text: 'Pinch',
            link: '/variants',
          },
          {
            text: 'Gestures',
            link: '/motion-instance',
          },
        ],
      },
    ],
  },
}
