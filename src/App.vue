<template>
  <TopMenu/>
</template>

<script setup lang="ts">
  import TopMenu  from './components/TopMenu.vue';
</script>
<style>
  body{
    font-family:"Source Sans Pro", sans-serif;
  }
  .center_content{
    display: flex;
    justify-content: center;
  }
  .space_between_content{
    display: flex;
    justify-content: space-between;
  }
  .page_content{
    width: 80%;
    margin: auto;
    margin-top: 20px;
    padding: 10px;
  }
</style>
