// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import sitemap from '@astrojs/sitemap';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
    site: 'https://daviddapid.github.io/learn-laravel',
    base: isDev ? '/' : '/learn-laravel/',
    integrations: [
        starlight({
            title: {
                id: 'Belajar Laravel',
                en: 'Learn Laravel',
            },
            social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
            sidebar: [
                {
                    label: 'Getting Started',
                    items: [
                        {
                            label: 'Introduction',
                            slug: 'getting-started/introduction',
                            translations: {
                                id: 'Pengenalan',
                            },
                        },
                        {
                            label: 'Installation',
                            slug: 'getting-started/installation',
                            translations: {
                                id: 'Instalasi',
                            },
                        },
                    ],
                },
            ],
            defaultLocale: 'id',
            locales: {
                id: { label: 'Indonesia' },
                en: { label: 'English' },
            },
            components: {
                Banner: './src/components/override/Banner.astro',
            },
        }),
        sitemap(),
    ],
});
