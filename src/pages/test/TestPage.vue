<template>
  全局参数:{{res.info}}
  <a-button type="dashed" @click="showLoginModal">showLogin</a-button>
</template>
<script lang="ts" setup>
import {useUserStore} from "../../store/userStore";
import {reactive} from "vue";
const userStore = useUserStore();
const info = userStore.getInfo();
const res = reactive({
  info
})
const showLoginModal = () =>{
  userStore.setIsShowModal(true)
}

</script>
<style scoped>

</style>