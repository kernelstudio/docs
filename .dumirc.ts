import {defineConfig} from 'dumi';

export default defineConfig({
    apiParser: {},
    resolve: {
        entryFile: 'src/index.ts',
    },
    outputPath: 'dist',
    themeConfig: {
        // name: 'firecho',
        logo: '/assets/logo/default.svg',
        metas: [
            {name: 'keywords', content: 'Firecho,Framework'},
            {name: 'description', content: 'Firecho framework.'},
        ],
        nav: {
            'zh-CN': [
                {title: 'FIRECHO', link: '/firecho/zh-hans/introduce'},
                {title: 'VUECHO', link: '/vuecho/zh-hans/introduce'},
                {title: 'FLOWECHO', link: '/flowecho/zh-hans/introduce'},
                {title: 'FRAMECHO', link: '/framecho/zh-hans/introduce'},
                {title: 'PLATFORM', link: '/platform/zh-hans/introduce'},
            ],
        },
        socialLinks: {
            github: 'https://github.com/kernelstudio/firecho'
        },
        prefersColor: {
            default: 'auto'
        },
        showLineNum: true,
        nprogress: true,
        footer: `Open-source MIT Licensed | @firecho ${new Date().getFullYear()}`
    },
    presets: [require.resolve('@dumijs/preset-vue')],
});
