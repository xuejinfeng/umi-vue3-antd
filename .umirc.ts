import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'yarn',
  presets: [require.resolve('@umijs/preset-vue')],

  // 自定义路由，如果不需要可按照官方约定进行创建子路由
  routes:[
    {
      path: '/',
      component: '@/pages/index',
    },
      {
        path: '/docs',
        component: '@/pages/docs',
        name:"docs"
      },
      {
        path: '/test',
        component: '@/pages/test',
        name:"test"
      },
      {
        path: '/shop',
        component: '@/pages/shop',
        name:"shop",
        routes:[
          {
            path: '',
            redirect:'/shop/cart'
          },
          {
            path: '/shop/cart',
            component: '@/pages/shop/cart',
            name:"cart"
          },
          {
            path: '/shop/detail',
            component: '@/pages/shop/detail',
            name:"detail"
          }
        ]
      },
     
    ]
});
