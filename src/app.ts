import antd from "ant-design-vue";
// @ts-ignore
import type { RouterConfig } from 'umi';
export function onAppCreated({ app }: any) {
  console.log('onAppCreated');
  app.use(antd);
}
export const router: RouterConfig = {
  // @ts-ignore
  scrollBehavior(to, from) {
    console.log('scrollBehavior', to, from);
  },
};

export function onMounted({ app, router }: any) {
  console.log('onMounted', app, router);
  // @ts-ignore
  router.beforeEach((to, from, next) => {
    console.log('router beforeEach', to, from);
    next();
  });
}