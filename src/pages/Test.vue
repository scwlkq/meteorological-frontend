<template>

  <div style="width: 100%">
    <a-space>
      <a-select
          v-model:value="selectKey"
          style="width: 300px"
          @change="handleChange"
      >
        <a-select-option value="1小时降水量">1小时降水量</a-select-option>
        <a-select-option value="6小时降水量">6小时降水量</a-select-option>
        <a-select-option value="24小时降水量">24小时降水量</a-select-option>
        <a-select-option value="近30天降水量">近30天降水量</a-select-option>
        <a-select-option value="近30天降水量距平">近30天降水量距平</a-select-option>
      </a-select>
    </a-space>

    <div style="display: flex;flex-direction: row;justify-content: space-around;margin-top: 20px">
      <a-card hoverable v-for="item in pictures" :key="item.url" v-show="item.url !== ''">
        <template #cover>
          <img class="picture" :src="item.url" style="height: 45vh;background-size: cover;"/>
        </template>
        <a-card-meta :title="item.title">
          <template #description>{{ item.date }}</template>
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {getLatestPicture} from "../apis/apis";
import {onMounted, ref} from "vue";
import {message} from "ant-design-vue";

const selectKey = ref('1小时降水量');
const pictures: any = ref([]);

const handleChange = async () => {
  console.log(selectKey.value)
  const res = await getLatestPicture(selectKey.value);

  if (res.data.code === 0) {
    pictures.value = res.data.data;
  }
  console.log(pictures.value)
}

onMounted(async () => {
  await handleChange()
})

</script>

<style scoped>
. picture {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
