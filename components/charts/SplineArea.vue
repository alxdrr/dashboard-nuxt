<template>
  <apexchart type="area" height="300" :options="chartOptions" :series="series" />
</template>

<script setup>
const series = [
  {
    name: "Orders",
    data: [4000, 3000, 5000, 7000, 6000, 8000, 12000, 10000, 14000, 11000, 16000, 20000],
  },
  {
    name: "Refunds",
    data: [2000, 1000, 3000, 4000, 3000, 5000, 8000, 6000, 10000, 7000, 11000, 15000],
  },
];

const chartOptions = {
  chart: {
    id: "sessions-chart",
    toolbar: { show: false },
    zoom: { enabled: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.2,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  colors: ["#10B981", "#3B82F6"],
  dataLabels: { enabled: false },
  legend: {
    position: "top",
    horizontalAlign: "center",
    fontSize: "14px",
    fontWeight: 500,
  },
  grid: {
    borderColor: "#f3f4f6",
    strokeDashArray: 4,
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    labels: {
      show: false,
    },
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#9CA3AF",
      },
      formatter: (val) => `${Math.round(val / 1000)}k`,
    },
  },
};
</script>
