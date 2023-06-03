<template>
  <div>
    省份：
    <a-select
        style="width: 200px"
        @change="handleChangeProvince"
    >
      <a-select-option v-for="item in provinces"
                       :key="item.code"
                       :value="item.code">{{ item.name }}
      </a-select-option>
    </a-select>

    市区：
    <a-select
        style="width: 200px;"
        @change="handleChangeCounty"
    >
      <a-select-option v-for="item in counties"
                       :key="item.code"
                       :value="item.code">{{ item.city }}
      </a-select-option>
    </a-select>
    <div>
      {{ weather }}
    </div>
    <div id="container"></div>
  </div>
</template>

<script lang="ts" setup>
import {queryAllProvinces, queryCountiesByProvince, queryWeatherByCounty} from "../apis/apis";
import {onMounted, ref} from "vue";
import {Chart} from '@antv/g2';


const provinces = ref([{
  code: "",
  name: "",
  url: ""
}]);
const counties = ref([{
  code: "",
  province: "",
  city: "",
  url: ""
}]);


const selectedCounty = ref('南京市');

const weather = ref();

const chart = new Chart({ container: "container" });


onMounted(async () => {
  const res = await queryAllProvinces();
  provinces.value = res.data;
})

const handleChangeProvince = async (value: string) => {
  // console.log(value);
  const res = await queryCountiesByProvince(value);
  counties.value = res.data;
  // console.log(counties.value);
}



const handleChangeCounty = async (value: string) => {
  // console.log(value);
  const res = await queryWeatherByCounty(value);
  weather.value = res.data;

  // 构造新图表


}

</script>

<style scoped>

</style>
