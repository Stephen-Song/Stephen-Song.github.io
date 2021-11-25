module.exports = {
  title: "Crucials",
  description: "An Imaginary Blog of a frontend Coder",
  dest: "public",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
        icon: "reco-home",
      },
      {
        text: "知识库",
        icon: "reco-message",
        items: [
          {
            text: "HTML",
            link: "/docs/theme-reco/",
          },
          {
            text: "CSS",
            link: "/docs/theme-reco/",
          },
          {
            text: "JS",
            link: "/docs/theme-reco/",
          },
          {
            text: "Vue",
            link: "/docs/theme-reco/",
          },
          {
            text: "浏览器原理",
            link: "/docs/theme-reco/",
          },
          {
            text: "计算机网络",
            link: "/docs/theme-reco/",
          },
          {
            text: "NodeJS",
            link: "/docs/theme-reco/",
          },
          {
            text: "性能优化",
            link: "/docs/theme-reco/",
          },
        ],
      },
      {
        text: "时间线",
        link: "/timeline/",
        icon: "reco-date",
      },

      {
        text: "算法",
        link: "/timeline/",
        icon: "reco-api",
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/duochizhacai",
            icon: "reco-github",
          },
          {
            text: "JueJin",
            link: "https://juejin.cn/user/1249486902410744",
            icon: "reco-juejin",
          },
        ],
      },
    ],
    plugins: [
      ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
        thirdparty: [ // 可选，默认 []
          {
            title: '在GitHub中搜索',
            frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
            behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: '在npm中搜索',
            frontUrl: 'https://www.npmjs.com/search?q=',
          },
          {
            title: '在Bing中搜索',
            frontUrl: 'https://cn.bing.com/search?q='
          }
        ]
      }],
      ['one-click-copy', { // 代码块复制按钮
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
        copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false // whether to display on the mobile side, default: false.
      }],
      [
        'vuepress-plugin-zooming', // 放大图片
        {
          selector:'.theme-vdoing-content img:not(.no-zoom)',
          options: {
            bgColor: 'rgba(0,0,0,0.6)'
          },
        },
      ],
    ],
    sidebar: {
      "/docs/theme-reco/": ["", "theme", "plugin", "api"],
    },
    // "type": "blog",
    // "blogConfig": {
    //   "category": {
    //     "location": 2,
    //     "text": "Category"
    //   },
    //   "tag": {
    //     "location": 3,
    //     "text": "Tag"
    //   }
    // },
    // "friendLink": [
    //   {
    //     "title": "午后南杂",
    //     "desc": "Enjoy when you can, and endure when you must.",
    //     "email": "1156743527@qq.com",
    //     "link": "https://www.recoluan.com"
    //   },
    //   {
    //     "title": "vuepress-theme-reco",
    //     "desc": "A simple and beautiful vuepress Blog & Doc theme.",
    //     "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     "link": "https://vuepress-theme-reco.recoluan.com"
    //   }
    // ],
    logo: "/logo.png",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "Crucials",
    authorAvatar: "/logo.png",
    record: "记录成长的每一天",
    startYear: "2020",
  },
  markdown: {
    lineNumbers: true,
  },
};
