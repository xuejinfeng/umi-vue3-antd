<template>
  <div class="navs">
    <ul>
      <li>
        <router-link to="/">主页</router-link>
      </li>
      <li>
        <router-link to="/docs">Docs</router-link>
      </li>
      <li>
        <!-- <a href="">测试</a> -->
        <router-link to="/test">测试</router-link>
      </li>
      <li>
        <!-- <a href="/home" extract>主页</a> -->
        <router-link to="/shop">商品</router-link>
      </li>
      <li>
        <!-- <a href="/home/cart">分类</a> -->
        <!-- <router-link to="/shop/cart">商品分类</router-link> -->
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
// import 'ant-design-vue/dist/antd.css';
import { defineComponent } from "vue";
export default defineComponent({
  setup() {},
});
</script>
<style lang="less">
// .is-active {
//   font-size: 12px;
//   color: red;
// }
.navs {
  ul {
    padding: 0;
    list-style: none;
    display: flex;
  }
  li {
    margin-right: 1em;
  }
}
</style>
