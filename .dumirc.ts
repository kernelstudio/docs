import {defineConfig} from 'dumi';

export default defineConfig({
    apiParser: {},
    resolve: {
        entryFile: 'src/index.ts',
    },
    outputPath: 'dist',
    themeConfig: {
        // name: 'firecho',
        title: 'Kernel Studio 在线文档',
        description: 'Kernel Studio 在线文档',
        logo: '/assets/logo/default.svg',
        metas: [
            {name: 'keywords', content: 'Firecho,Framework'},
            {name: 'description', content: 'Firecho framework.'},
        ],
        nav: {
            'zh-CN': [
                {title: '后端', link: '/firecho/zh-hans/introduce'},
                {title: '前端', link: '/vuecho/zh-hans/introduce'},
                {title: '流程', link: '/flowecho/zh-hans/introduce'},
                {title: '低代码', link: '/framecho/zh-hans/introduce'},
                {title: '平台', link: '/platform/zh-hans/introduce'},
                {title: '联系', link: '/contract/zh-hans/introduce'},
            ],
        },
        socialLinks: {
            github: 'https://github.com/kernelstudio'
        },
        prefersColor: {
            default: 'auto'
        },

        showLineNum: true,
        nprogress: true,
        footer: `Open-source MIT Licensed | @kernelstudio ${new Date().getFullYear()}`
    },
    presets: [require.resolve('@dumijs/preset-vue')],
});
