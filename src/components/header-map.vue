<template>
  <div ref="overlay" class="overlay">
    <div ref="map" id="map"></div>
    <div ref="content" class="content">
      <div class="content-lhs" ref="contentLhs">
        <h3><i>Hello, my name is</i></h3>
        <h1>Mark Cummins</h1>
        <h3>I am a software developer from 🇮🇪 Ireland</h3>
        <h4>
          root@root: $ echo <i ref="animatedTxt"></i>
          <Blinky />
        </h4>
      </div>
      <div class="content-rhs" ref="contentRhs">
        <!-- <h3>world</h3> -->
        <img class="profile-picture" alt="Picture of Me" src="~@/assets/me.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import mapboxgl from "mapbox-gl";
import Blinky from "@/components/blinking-cursor";

export default {
  name: "HeaderMap",

  components: {
    Blinky,
  },

  setup() {
    const map = ref(null);
    const overlay = ref(null);
    const content = ref(null);
    const contentLhs = ref(null);
    const contentRhs = ref(null);
    const animatedTxt = ref(null);

    const animateMap = false;
    const mapBox = ref(null);

    const addMapMarker = () => {
      const el = document.createElement("div");
      el.className = "marker";

      new mapboxgl.Marker(el).setLngLat([-7.90983, 52.91427]).addTo(mapBox.value);
    };

    const mapAnimate = () => {
      mapboxgl.accessToken =
        "pk.eyJ1IjoibWFyay1jdW1taW5zIiwiYSI6ImNsOGo2ZjByZzBndW8zbnM2bXJsNjgzMmIifQ.Ed1-0JG1lsPao6WVzAhCiw";

      mapBox.value = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/dark-v10",
        zoom: 1.5,
        center: [30, 50],
        projection: "globe",
        attributionControl: false,
      });

      mapBox.value.on("load", () => {
        mapBox.value.setFog({
          range: [0.8, 8],
          color: "#484848",
          "horizon-blend": 0.5,
          "high-color": "#191A1A",
          "space-color": "#2A2A2A",
          "star-intensity": 0.15,
        });

        addMapMarker();
        mapBox.value.flyTo({
          center: [-7.90983, 52.91427],
          zoom: 8,
          speed: 0.32,
          curve: 3,
          essential: true,
        });
      });
    };

    const contentAnimate = () => {
      const tl = gsap.timeline();
      tl.to(map.value, { opacity: 1, duration: 2, delay: 0.2, ease: "Power2.easeOut" });
      tl.to(content.value, {
        opacity: 1,
        duration: 2,
        delay: 1,
        ease: "Power2.easeOut",
      });

      tl.from(
        contentLhs.value,
        {
          opacity: 0,
          x: 100,
          duration: 2,
          ease: "Power2.easeOut",
        },
        3
      );

      tl.from(
        contentRhs.value,
        {
          opacity: 0,
          x: -100,
          duration: 2,
          ease: "Power2.easeOut",
        },
        3
      );

      tl.to(animatedTxt.value, {
        delay: 0,
        duration: 4,
        text: { value: "I develop for the web", delimiter: "" },
        ease: "none",
      });

      tl.to(animatedTxt.value, {
        delay: 3,
        duration: 1,
        text: { value: "", delimiter: " " },
        ease: "none",
      });

      tl.to(animatedTxt.value, {
        delay: 1,
        duration: 3,
        text: { value: " I know how to hack the mainframe", delimiter: "" },
        type: "diff",
        ease: "none",
      });

      tl.play();
    };

    onMounted(() => {
      gsap.registerPlugin(TextPlugin);

      setTimeout(() => {
        if (animateMap) {
          mapAnimate();
          contentAnimate();
        }
      }, 2000);

      // gsap.to(content.value, { opacity: 1, duration: 4 });
    });

    return {
      map,
      overlay,
      content,
      contentLhs,
      contentRhs,
      animatedTxt,
    };
  },
};
</script>

<style>
.marker {
  background-image: url("~@/assets/logo.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
}
</style>

<style scoped lang="scss">
.overlay {
  z-index: 10;
  height: 100vh;
  position: relative;
  background: rgb(var(--neutral-50));
}
#map {
  opacity: 0;
  z-index: 20;
  position: absolute;
  width: 100%;
  height: 100%;
  height: 100vh;
}
.content {
  z-index: 30;
  width: 100%;
  height: 100%;
  position: absolute;
  background: rgba(var(--neutral-50), 0.85);

  opacity: 1;
  display: grid;
  column-gap: 4vw;
  align-items: center;
  grid-template-columns: 1fr 1fr;

  .content-lhs {
    text-align: right;
    justify-self: end;


  }
  .content-rhs {
    justify-self: start;
  }

  .profile-picture {
    border-radius: 50%;
    max-width: 12rem;
  }
}
</style>
