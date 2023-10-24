/**
 * @type {import('vitepress').UserConfig}
 */
export default {
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
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no',
      },
    ],
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
        content: 'https://gesture.vueuse.org/banner.png',
      },
    ],
    ['meta', { name: 'twitter:creator', content: '@yaeeelglx' }],
    [
      'meta',
      { name: 'twitter:image', content: 'https://gesture.vueuse.org/logo.svg' },
    ],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
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
            link: '/use-drag',
          },
          {
            text: 'Move',
            link: '/use-move',
          },
          {
            text: 'Hover',
            link: '/use-hover',
          },
          {
            text: 'Scroll',
            link: '/use-scroll',
          },
          {
            text: 'Wheel',
            link: '/use-wheel',
          },
          {
            text: 'Pinch',
            link: '/use-pinch',
          },
          {
            text: 'Gestures',
            link: '/use-gesture',
          },
          {
            text: 'Gesture state',
            link: '/gesture-state',
          },
          {
            text: 'Gesture options',
            link: '/gesture-options',
          },
          {
            text: 'Motion Integration',
            link: '/motion-integration',
          },
          {
            text: 'Utilities',
            link: '/utilities',
          },
        ],
      },
    ],
  },
}
