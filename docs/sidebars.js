/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: 'Quickstarts',
      collapsed: false,
      items: [
        'quickstarts/react',
        'quickstarts/nextjs',
        'quickstarts/php-laravel',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: false,
      items: [
        'guides/configure-app',
        'guides/login-button',
        'guides/callback',
        'guides/protect-routes',
        'guides/jwt-verification',
        'guides/webhooks',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/oidc',
        'concepts/tokens',
      ],
    },
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'reference/api/overview',
        'reference/api/authorize',
        'reference/api/token',
        'reference/api/userinfo',
        'reference/api/revoke',
        'reference/api/jwks',
      ],
    },
    {
      type: 'category',
      label: 'SDK Reference',
      items: [
        'reference/sdk/react',
        'reference/sdk/js',
      ],
    },
    'security',
    'faq',
    'changelog',
  ],
};

module.exports = sidebars;
