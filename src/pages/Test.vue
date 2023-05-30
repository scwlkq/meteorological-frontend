<template>
  <div class="logo">
    <img :src="logo" />
  </div>
</template>

<script lang="ts" setup>
import {getLatestPicture} from "../apis/apis";

const logo = getLatestPicture();

console.log(logo);
</script>

<style scoped>

</style>
