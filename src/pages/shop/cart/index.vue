<template>
  <a-input v-model="form.name" placeholder="please enter your username..." />

  <a-card title="Default size card" style="width: 300px">
    <template #extra><a href="#">more</a></template>
    <a-button type="dashed">Dashed Button</a-button>
  </a-card>
  <a-button type="primary">Primary Button</a-button>
</template>

<script setup>
import { reactive } from "vue";
const form = reactive({
  name: "",
  post: "",
  isRead: false,
});
const handleSubmit = (data) => {
  console.log(data);
};
</script>
