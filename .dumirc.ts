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
            mode: "override",
            value: [
                {title: 'GUIDES', link: '/guides/latest/introduce'},
                {title: 'FIRECHO', link: '/firecho/latest/introduce'},
                {title: 'VUECHO', link: '/vuecho/latest/introduce'},
                {title: 'PLATFORM', link: '/platform/latest/introduce'},
                {title: 'BPM', link: '/bpm/latest/introduce'}
            ]
        },
        socialLinks: {
            github: 'https://github.com/kernelstudio/firecho',
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
