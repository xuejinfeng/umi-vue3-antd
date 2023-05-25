<template>
  <div>
    <h2>商品页面</h2>
    <p>vue shop </p>
    <div class="navs">
      <ul>
        <li>
          <router-link to="/shop/cart">分类</router-link>
        </li>
        <li>

          <router-link to="/shop/detail">详情</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
  
</template>
  