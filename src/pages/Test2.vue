<template>
  <div>
    <a-card hoverable style="width: 70vw">
      <template #cover>
        <img alt="example" :src="wordCloudPicture"/>
      </template>
      <a-card-meta title="词云图">
        <template #description>数据来源：微博作者 中国气象爱好者首页</template>
      </a-card-meta>
    </a-card>
  </div>
</template>

<script lang="ts" setup>
import {getWordCloudPicture, queryAllProvinces} from "../apis/apis";
import {onMounted, ref} from "vue";
const wordCloudPicture = ref('');

onMounted(async () => {
  const res = await getWordCloudPicture();
  wordCloudPicture.value = res.data;
})

</script>

<style scoped>



</style>
