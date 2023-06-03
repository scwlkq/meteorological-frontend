<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script lang="ts" setup>
import {Line} from '@antv/g2plot';
import {queryWeatherByCounty} from "../apis/apis";

const res = await queryWeatherByCounty('59626');


const data: { year: any; value: any; category: string; }[] = [];
console.log(data);
for(let i = 0;i<res.data.tempchart.length;i++){
  const cur = res.data.tempchart[i];
  data.push({
    year:cur.time,
    value: cur.max_temp,
    category:"max_temp",
  });
  data.push({
    year:cur.time,
    value: cur.mim_temp,
    category:"mim_temp",
  });
}
console.log(data);
//   [
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Liquid fuel"
// },
// {
//   "year": "1850",
//   "value": 54,
//   "category": "Solid fuel"
// },
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Gas fuel"
// },
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Cement production"
// },
// {
//   "year": "1850",
//   "value": 0,
//   "category": "Gas flarinl"
// }];


const line = new Line('container', {
  data,
  xField: 'year',
  yField: 'value',
  seriesField: 'category',
  xAxis: {
    type: 'time',
  },
  yAxis: {
    label: {
      // 数值格式化为千分位
      formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
    },
  },
});

line.render();


</script>

<style scoped>
#container {
  width: 80%;
  height: 80vh;
}
</style>
