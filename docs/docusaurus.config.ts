import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Provve Документация',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://provve.github.io',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: "ru",
    locales: ["ru"],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      items: [
        {
          type: "docSidebar",
          sidebarId: "users",
          position: "right",
          label: "Пользователям",
        },
        {
          type: "docSidebar",
          sidebarId: "devs",
          position: "right",
          label: "Разработчикам",
        },
      ],
      logo: {
        alt: "logo",
        src: "img/favicon.ico",
        target: "_self",
      },
      hideOnScroll: true,
    },
    footer: {
      style: "dark",
      copyright: `© Алексей Видеман, ${new Date().getFullYear()}`,
      links: [
        {
          items: [
            {
              label: 'Основой сайт',
              to: 'https://provve.github.io',
            },
            {
              label: 'Документация на GitHub',
              to: 'https://github.com/Provve/web/tree/main/docs',
            },
            {
              label: 'Глоссарий',
              to: '/docs/glossary',
            },
          ],
        },
      ]
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
