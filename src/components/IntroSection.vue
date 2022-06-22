<template>
  <section class="relative bg-mainColor pb-36">
    <div class="bg"></div>
    <HeaderStyleVue/>
    <div class="flex lg:flex-row flex-col justify-center items-center relative container mx-auto sm:px-6 px-4 mt-5">
      <div class="lg:w-1/2 w-full flex justify-center mask relative">
        <div class="bgMan">
          <img src="../assets/shapes.png"/>
        </div>
        <img src="../assets/man.png" alt="kammeen" class="z-10 lg:w-auto h-full w-2/5"/>
        <div class="maskInner lg:block hidden">
          <img src="../assets/introsection.png" class="absolute w-auto h-auto left-8 top-1/3"/>
          <img src="../assets/mask.png" class="img"/>
        </div>
      </div>
      <div class="lg:w-1/2 w-full text-start font-bold flex flex-col justify-center">
        <h2 class="text-white text-4xl mb-5">{{title}}</h2>
        <p class="text-white text-justify text-xl leading-10">{{description}}</p>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderStyleVue from './HeaderStyle.vue'
export default{
data() {
  return {
    title: 'نص تجريبى',
    description: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق  إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع'}
},
components:{
  HeaderStyleVue,
}
}
</script>
<style scoped>
section .bg{
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url(../assets/bgIntro.png);
  background-size: cover;
  opacity: 10%;
  left: 0;
  right: 0;
  top: 0;
}
.mask:hover div{
  animation-play-state: paused;
}
.maskInner{
  position: absolute;
  overflow: hidden;
  top: 50%;
  transform: translate(-50%,-63%);
  left: 50%;
  background: linear-gradient(270deg, rgba(54,46,102,1) 0%, rgba(87,78,156,1) 100%);
  width: 400px;
  height: 400px;
  border-radius: 100%;
}
.maskInner .img{
  position: absolute;
  bottom: -180px;
  left: -62px;
  width: 100%;
  height: 100%;
}
.bgMan{
  position: absolute;
  -webkit-animation:spin 30s linear infinite;
  -moz-animation:spin 30s linear infinite;
  animation:spin 30s linear infinite;
}
@keyframes spin {100% { -webkit-transform: rotate(360deg); transform:rotate(360deg);}}
@-moz-keyframes spin {100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin {100% { -webkit-transform: rotate(360deg); } }
</style>
