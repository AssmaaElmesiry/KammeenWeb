<script >
import Intro from './components/IntroSection.vue';
import AboutUsVue from './components/AboutUs.vue';
import HowItWorkVue from './components/HowItWork.vue';
export default{
  components:{
    Intro,
    AboutUsVue,
    HowItWorkVue,
  }
}
</script>

<template>
  <Intro />
  <AboutUsVue />
  <HowItWorkVue />
</template>

<style>
#app {
  font-family:"Tajawal";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
