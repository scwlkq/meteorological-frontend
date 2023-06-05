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
    <a-divider></a-divider>
    <div style="float: right;width: 80vw;text-align: center">
      <a-descriptions title="天气情况" style="background-color: #d9d9d9">
        <a-descriptions-item label="天气质量">{{ info.airText }}</a-descriptions-item>
        <a-descriptions-item label="时间">{{ info.forecastTime }}</a-descriptions-item>
        <a-descriptions-item label="天气">{{ info.weather }}</a-descriptions-item>
        <a-descriptions-item label="风向">{{ info.windDirect }}</a-descriptions-item>
        <a-descriptions-item label="风级">{{ info.windPower }}</a-descriptions-item>
        <a-descriptions-item label="风速">{{ info.windSpeed }}m/s</a-descriptions-item>
      </a-descriptions>
    </div>
    <a-divider></a-divider>
    <div style="float:right;width: 80vw">
      <a-card title="最近气温">
        <a-card-grid style="width: 14.28%; float:right;text-align: center;" v-for="item in weather">
          <p>日期: {{ item.time }}</p>
          <p>温度: {{ item.min_temp }}°C~{{item.max_temp}}°C</p>
        </a-card-grid>
      </a-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {queryAllProvinces, queryCountiesByProvince, queryWeatherByCounty, queryWeatherInfo} from "../apis/apis";
import {onMounted, ref} from "vue";

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


const selectedCounty = ref('');
const weather = ref();
const info = ref({
  airText:"",
  forecastTime:"",
  weather:"",
  windDirect:"",
  windPower:"",
  windSpeed:""
});

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
  weather.value = res.data.data;

  const resInfo = await queryWeatherInfo(value);
  info.value = resInfo.data.data;

}

</script>

<style scoped>

</style>
