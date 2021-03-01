module.exports = {
  title: 'Audo AI',
  tagline: 'An API to Remove Background Noise and Enhance Speech',
  url: 'https://audo.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'audo-ai',
  projectName: 'audo-docs',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Audo AI',
      logo: {
        alt: 'Audo AI Logo',
        src: 'img/logo.svg',
        href: 'https://audo.ai'
      },
      items: [
        {
          href: 'https://audo.ai',
          label: 'Home',
          position: 'left',
        },
        {
          href: 'https://app.audo.ai',
          label: 'Login',
          position: 'left',
        },
        {
          href: '#',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Audo AI Homepage',
              href: 'https://audo.ai/',
            },
            {
              label: 'Docs Homepage',
              to: '/',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'Email',
              href: 'mailto:info@audo.ai'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://blog.audo.ai/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/audo-ai',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Audo AI, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      },
    ],
  ],
};
