<script >
import Intro from './components/IntroSection.vue';
import AboutUsVue from './components/AboutUs.vue';
import HowItWorkVue from './components/HowItWork.vue';
import FeaturesVue from './components/Features.vue';
import DownloadVue from './components/Download.vue';
import FooterVue from './components/Footer.vue';
export default{
  data () {
    return {
    }
  },
  components:{
    Intro,
    AboutUsVue,
    HowItWorkVue,
    FeaturesVue,
    DownloadVue,
    FooterVue,
  }
}
</script>

<template>
  <Intro />
  <AboutUsVue />
  <HowItWorkVue />
  <FeaturesVue />
  <DownloadVue />
  <FooterVue />
</template>

<style>
#app {
  font-family:"Tajawal";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
