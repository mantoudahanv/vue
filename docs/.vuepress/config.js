module.exports = {
    title:'山己子木',
    description: '山己子木,vuepress文档',
    locales: {
      '/':{
        lang:'zh-CN',
      }
    },
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base:'/vue/',

    themeConfig: {
      //调整github项目地址
      // repo: 'https://github.com/mantoudahanv/vue.github.io',
      // editLinks: false,
      // editLinkText: '编辑文档！',

      // 最后更新时间
      // lastUpdated: '上次更新', // string | boolean
      // avbar: false  用于禁用所有页面导航栏
      
      
        nav: [
          { text: '主页', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: '其他文档',
            ariaLabel: 'Language Menu',
            //嵌套下拉分组
            items: [
              { text: '直播文档', link: 'css2' },
              { text: '直播操作', link: 'css1' },
              //删除后非嵌套
              { text: '分组', items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' }
              ] },
            ]
          },
        ],
        // 多个侧边栏

  sidebarDepth: 2,
  sidebar: 'auto'
      // sidebar: {
      //   '/css/': [
      //     '',     
      //     'css1',  
      //     'css2',
      //   ],
  
      //   '/javascript/': [
      //     '',      /* /bar/ */
      //     'javascript1', /* /bar/three.html */
      //     'javascript2'   /* /bar/four.html */
      //   ],
  
      //   // fallback deny all
      //   '/': [
      //     '',        /* / */
      //     '/about/', /* /contact.html */
      //     'about/test'    /* /about.html */
      //   ]
      // }

      }
    }
  