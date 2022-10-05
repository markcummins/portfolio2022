<template>
  <canvas ref="canvas" width="100%" height="100%"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default {
  name: "component-radar",

  props: {
    labels: {
      type: Array,
      required: true,
    },
    datasets: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    var radarChart = null;
    const canvas = ref(null);

    gsap.registerPlugin(ScrollTrigger);

    const chartColors = {
      // primary: "138, 198, 232",
      primary: "255, 255, 255",
    };

    const config = {
      type: "radar",
      data: {
        labels: props.labels,
        datasets: [],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: false,
            text: "...",
            fontColor: "white",
          },
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            pointLabels: {
              color: `rgba(${chartColors.primary}, .8)`,
              font: {
                size: 16,
                weight: "bold",
              },
            },
            angleLines: {
              color: `rgba(${chartColors.primary}, .5)`,
              display: true,
            },
            ticks: {
              color: `rgba(${chartColors.primary}, .5)`,
              showLabelBackdrop: false,
              stepSize: 12,
            },
            suggestedMin: 0,
            suggestedMax: 50,
            grid: {
              color: `rgba(${chartColors.primary}, .2)`,
            },
          },
        },
        animation: {
          delay: (context) => {
            let delay = 0;
            if (context.type === "data" && context.mode === "default") {
              delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
          },
        },
      },
      plugins: [],
    };

    onMounted(() => {
      radarChart = new Chart(canvas.value, config);

      ScrollTrigger.create({
        id: "destroy",
        trigger: canvas.value,
        markers: false,
        start: "top bottom",
        onLeaveBack: () => {
          resetChartData();
        },
      });

      ScrollTrigger.create({
        id: "animate",
        trigger: canvas.value,
        markers: false,
        start: "top 80%",
        onEnter: () => {
          setChartData();
        },
      });
    });

    const setChartData = () => {
      console.log("setChartData");
      radarChart.data.datasets = [];
      props.datasets.forEach(({ color, data }) => {
        radarChart.data.datasets.push({
          label: "",
          data: data,
          fill: true,
          backgroundColor: `rgba(${color}, .5)`,
          borderColor: `rgb(${color})`,
          pointBackgroundColor: `rgb(${color})`,
          pointBorderColor: `rgb(${color})`,
          pointHoverBackgroundColor: `rgb(${color})`,
          pointHoverBorderColor: `rgb(${color})`,
        });
      });
      radarChart.update();
    };

    const resetChartData = () => {
      console.log("resetChartData");
      radarChart.data.datasets = [];
      props.datasets.forEach(({ color, data }) => {
        const emptySet = [];
        data.forEach(() => {
          emptySet.push(0);
        });

        radarChart.data.datasets.push({
          label: "",
          data: emptySet,
          fill: true,
          backgroundColor: `rgba(${color}, .5)`,
          borderColor: `rgb(${color})`,
          pointBackgroundColor: `rgb(${color})`,
          pointBorderColor: `rgb(${color})`,
          pointHoverBackgroundColor: `rgb(${color})`,
          pointHoverBorderColor: `rgb(${color})`,
        });
      });
      radarChart.update();
    };

    return { canvas };
  },
};
</script>
