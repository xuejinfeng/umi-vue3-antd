<template>
    <a-card title="详情页" style="width: 300px">
     
    </a-card>
    
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
  