module.exports = {
  title: "Audo AI",
  tagline: "An API to Remove Background Noise and Enhance Speech",
  url: "https://audo.ai",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "audo-ai",
  projectName: "audo-docs",
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: undefined,
      logo: {
        alt: "Audo AI Logo",
        src: "img/text-logo.svg",
        href: "/",
      },
      items: [
        {
          href: "https://audo.ai",
          label: "Home Page",
          position: "left",
        },
        {
          href: "https://app.audo.ai",
          label: "Login",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Audo AI Homepage",
              href: "https://audo.ai/",
            },
            {
              label: "Docs Homepage",
              to: "/",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Email",
              href: "mailto:info@audo.ai",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://audo.ai/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/audo-ai",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Audo AI, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
