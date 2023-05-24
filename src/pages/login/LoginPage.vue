<template>
  <a-button @click="jumpToTestPage">跳转到测试页面</a-button>
  <a-input v-model:value="value1"></a-input>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {useUserStore} from "../../store/userStore.ts";
import {ref} from "vue";
import type { Ref } from 'vue'

const value1 = ref('')
const router = useRouter();
const userStore = useUserStore();

const jumpToTestPage = () =>{
  //和route.ts文件对应
  router.push("/test")
  userStore.setInfo(value1.value);
}
</script>

<style scoped>

</style>