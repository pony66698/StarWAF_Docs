const isDev = process.env.NODE_ENV === 'development';
const pageRef = require('./src/plugins/pageRef');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  scripts: [
    {
      src: "/releasenotes.js",
    },
    {
      src: "/badge.js",
    },
  ],
  i18n: {
    defaultLocale: 'en-GB',
    locales: ['en-GB']
  },
  title: 'Digital Support Services T-Level Notes',
  tagline: 'An awesome textbook alternative, that you can contribute to!',
  url: 'https://starwaf.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Sh1n3zZ',
  projectName: 'notes',
  trailingSlash: true,
  themeConfig: {
    umami: {
      websiteid: "67a6f4d2-2b85-4678-8972-d5d43a6216ab",
      src: "https://analytics.notes.nayanpatel.net/umami.js",
    },
    clarity: {
      ID: "9hfzg8mbot",
    },
    algolia: {
      appId: 'T2T780TWHU',
      apiKey: '99a14a43d86b4d0cb8f8608e65b3edaf',
      indexName: 'notes-nayanpatel',
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
     announcementBar: {
       id: 'beta', // Any value that will identify this message.
       content:
         '⭐️ 同时你也可以前往 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sh1n3zZ/LeSunCloud_Docs">GitHub</a> 给咱来一个 Star 噢 ヾ⁠(⁠･⁠ω⁠･⁠*⁠)⁠ﾉ',
       backgroundColor: '#fafbfc', // Defaults to `#fff`.
       textColor: '#091E42', // Defaults to `#000`.
       isCloseable: true, // Defaults to `true`.
     },
     metadata: [{name: 'Digital Support Services T-Level Textbook', content: 'notes, docs, textbook, alternative, learn'}],
    navbar: {
      title: 'StarWAF',
      logo: {
        alt: 'StarWAF',
        src: 'img/logonobg.png',
        href: '/',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: '/docs',
          label: 'Docs',
          position: 'left',
        },
        {
          label: 'Tools',
          position: 'left',
          items: [
            {
              label: 'Backdrop Icons',
              to: 'backdropicons',
            },
            {
              label: 'Analytics',
              to: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes',
            },
            {
              label: '🚧 More comming soon!',
              to: '#',
              className: 'denied',
            },
          ],
        },
        {
          to: '/feature-requests',
          label: 'Feature Request →',
          position: 'left',
          className: 'feature-req',
        },
        {
          href: 'https://github.com/Nayan-Web/Digital-Support-Notes',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.producthunt.com/posts/digital-support-notes',
          position: 'right',
          className: 'header-prod-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Sites',
          items: [
            {
              label: 'Notes',
              to: 'docs',
            },
            {
              label: 'Analytics',
              href: 'https://analytics.notes.nayanpatel.net/share/NmRzIAly/Digital%20Support%20Notes',
            },
            {
              label: 'Main Site',
              href: 'https://nayanpatel.net',
            },
            
          ],
        },
        {
          title: 'Sponsors',
          items: [
            {
              label: 'Sponsors',
              to: 'sponsors',
            },
          ],
        },
        {
          title: 'Code of Conduct',
          items: [
            {
              label: 'Code of Conduct',
              href: 'https://github.com/PatelN123/Digital-Support-Notes/blob/main/CODE_OF_CONDUCT.md',
            },
          ],
        },
      ],
    copyright: ` Copyright © Coded with ❤️ by <a href="https://lightxi.com">LightXi </a> & <a href="https://github.com/PatelN123/Digital-Support-Notes">the community</a></a>`,
  },
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: [
        'lua',
        'toml',
      ],
    },
    zoomSelector: '.markdown :not(.authority-availability) > img',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        googleAnalytics: {
          trackingID: 'UA-216503437-1',
          anonymizeIP: true,
        },
        docs: {
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),

          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          editUrl: "https://github.com/PatelN123/Digital-Support-Notes/edit/main/Website/",
          beforeDefaultRemarkPlugins: [
            pageRef,
        ],
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Nayan Notes Blog!',
          blogDescription: 'All official news from Nayan notes!',
          blogSidebarTitle: 'Nayan Notes news',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-umami',
      {
      },
    ],
    [
      'docusaurus-plugin-clarity',
      {
      },
    ],
    [
      'docusaurus-plugin-help-widget',
      {
      },
    ],
    [
      'docusaurus-plugin-sass',
      {
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logonobg.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      'ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        // disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        id: "pwa",
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
],
};

async function createConfig() {
  const FeatureRequestsPlugin = (await import('./src/featureRequests/FeatureRequestsPlugin.mjs')).default;
  config.plugins?.push(FeatureRequestsPlugin);
  return config;
}

module.exports = createConfig;
