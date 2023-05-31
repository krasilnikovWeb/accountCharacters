<template>
  <div id="app" class="app">
    <div class="app__top"><Navbar class="app__navbar" /> <router-view /></div>
    <div class="app__bottom"><Footer></Footer></div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default {
  name: "Home",
  components: { Navbar, Footer },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
.app {
  font-family: "Montserrat", sans-serif;
  line-height: 24px;
  font-size: 14px;
  height: 100vh;

  h1 {
    font-size: 16px !important;
    font-weight: 500;
    color: black;
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2.6fr 0.2fr;
  gap: 0px 0px;
  grid-template-areas:
    "top"
    "bottom";
}
.top {
  grid-area: top;
}
.bottom {
  grid-area: bottom;
}
</style>
