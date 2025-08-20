// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const darkTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Securable',
  tagline: 'Sign in once, use it everywhere.',
  url: 'https://docs.securable.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'securable', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  i18n: { defaultLocale: 'en', locales: ['en'] },

  presets: [
    [
      'classic',
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/securable/docs/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      })
    ],
  ],

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        highlightSearchTermsOnTargetPage: true,
        hashed: true,
        explicitSearchResultPath: true
      },
    ],
  ],

  themeConfig:
    ({
      image: 'img/og.png',
      metadata: [
        {name: 'theme-color', content: '#3e66ff'},
        {name: 'keywords', content: 'oauth, oidc, authentication, login, jwt, securable'}
      ],
      navbar: {
        title: 'Securable',
        logo: { alt: 'Securable Logo', src: 'img/logo.svg' },
        items: [
          { to: '/', label: 'Docs', position: 'left' },
          { to: '/category/quickstarts', label: 'Quickstarts', position: 'left' },
          { to: '/category/reference', label: 'API Reference', position: 'left' },
          { href: 'https://securable.dev', label: 'Website', position: 'right' },
          { href: 'https://github.com/securable', label: 'GitHub', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: '/' },
              { label: 'Quickstarts', to: '/category/quickstarts' },
              { label: 'Guides', to: '/category/guides' },
            ],
          },
          {
            title: 'Reference',
            items: [
              { label: 'Auth API', to: '/category/api-reference' },
              { label: 'SDKs', to: '/category/sdk-reference' },
            ],
          },
          {
            title: 'More',
            items: [
              { label: 'Website', href: 'https://securable.dev' },
              { label: 'Status', href: 'https://status.securable.dev' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Securable. `,
      },
      colorMode: { defaultMode: 'dark', respectPrefersColorScheme: true },
      prism: {
        theme: darkTheme,
        additionalLanguages: ['php', 'bash', 'powershell'],
      },
    }),
};

module.exports = config;
