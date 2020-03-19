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
      repo: 'https://github.com/mantoudahanv/vue.github.io',
      editLinks: false,
      editLinkText: '编辑文档！',

      // 最后更新时间
      // lastUpdated: '上次更新', // string | boolean
      // avbar: false  用于禁用所有页面导航栏
      
      sidebarDepth: 2,//自动生成侧边栏
        nav: [
          { text: '主页', link: '/' },
          { text: 'Guide', link: '/guide/' },
          {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            //嵌套下拉分组
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' },
              //删除后非嵌套
              { text: '分组', items: [
                { text: 'Chinese', link: '/language/chinese/' },
                { text: 'Japanese', link: '/language/japanese/' }
              ] },
            ]
          },
          { text: 'External', link: 'https://google.com' },
        ],

        // 多个侧边栏
      sidebar: {
        '/css/': [
          '',     /* /foo/ */
          'css1',  /* /foo/one.html */
          'css2'   /* /foo/two.html */
          
        ],
  
        '/javascript/': [
          '',      /* /bar/ */
          'javascript1', /* /bar/three.html */
          'javascript2'   /* /bar/four.html */
        ],
  
        // fallback deny all
        '/': [
          '',        /* / */
          '/about/', /* /contact.html */
          'about/test'    /* /about.html */
        ]
      }

      }
    }
  