<template>
  <div>
    <div><NavTop /></div>
    <div><NavTopMobile /></div>
  </div>
</template>

<script>
import NavTop from "@/components/nav/header/desktop.vue";
import NavTopMobile from "@/components/nav/header/mobile.vue";

export default {
  name: "nav-top",

  components: {
    NavTop,
    NavTopMobile,
  },
};
</script>

<style scoped>
#nav-top-mobile {
  display: block;
}
#nav-top-desktop {
  display: none;
}
@media screen and (min-width: 768px) {
  #nav-top-mobile {
    display: none;
  }
  #nav-top-desktop {
    display: block;
  }
}
</style>
