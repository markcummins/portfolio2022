<template>
  <canvas ref="canvas" width="100%" height="100%"></canvas>
</template>

<script>
import Chart from "chart.js/auto";
import { inject, watch, ref, onMounted } from "vue";

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

    const theme = inject("theme");

    watch(theme, () => {
      const config = getConfig();
      radarChart.options = config.options;
      setChartData();

      radarChart.update();
    });

    gsap.registerPlugin(ScrollTrigger);

    const getColors = () => {
      return {
        primary: theme.value === "dark" ? "138, 198, 232" : "80, 80, 120",
      };
    };

    const getConfig = () => {
      const chartColors = getColors();

      return {
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
                  size: 15,
                  family: "'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace",
                  weight: "normal",
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
                delay = context.dataIndex * 150 + context.datasetIndex * 50;
              }
              return delay;
            },
          },
        },
        plugins: [],
      };
    };

    onMounted(() => {
      radarChart = new Chart(canvas.value, getConfig());

      ScrollTrigger.create({
        id: "destroy",
        trigger: canvas.value,
        markers: false,
        start: "top bottom",
        onLeaveBack: () => {
          resetChartData();
          radarChart.update();
        },
      });

      ScrollTrigger.create({
        id: "animate",
        trigger: canvas.value,
        markers: false,
        start: "top 80%",
        onEnter: () => {
          setChartData();
          radarChart.update();
        },
      });
    });

    const setChartData = () => {
      radarChart.data.datasets = [];

      props.datasets.forEach(({ data }) => {
        const chartColors = getColors();
        const color = chartColors.primary;

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
    };

    const resetChartData = () => {
      radarChart.data.datasets = [];
      props.datasets.forEach(({ data }) => {
        const chartColors = getColors();
        const color = chartColors.primary;

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
    };

    return { canvas };
  },
};
</script>
