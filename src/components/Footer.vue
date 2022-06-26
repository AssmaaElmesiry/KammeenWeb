<template>
    <section class="">
        <div class="container mx-auto sm:px-6 px-4 mt-mFooterT">
            <TitleVue class="text-thirdColor color">تواصل معنا</TitleVue>
            <div class="flex mb-16">
                <div  class="flex">
                    <img src="../assets/email.svg" />
                    <div class="flex flex-col text-right mr-4 text-white">
                        <label>
                             البريد الإلكتروني :
                        </label>
                        <a href="mailto:kameen@kameen.com" target="_blank">kameen@kameen.com</a>
                    </div>
                </div>
                <div class="flex mr-44">
                    <img src="../assets/phone-call.svg" />
                    <div class="flex flex-col text-right mr-4 text-white">
                        <label>
                              رقم الجوال :
                        </label>
                        <a href="tel:+012345678910" target="_blank">012345678910</a>
                    </div>
                </div>
            </div>
            <form class="w-9/12 mb-24">
                <div  class="grid grid-cols-4 gap-4 ">
                    <input class="bg-transparent py-4 pr-5 border border-white text-white" type="name" placeholder="الآسم">
                    <input class="bg-transparent py-4 pr-5 border border-white text-white" type="email" placeholder="البريد الألكترونى">
                    <input class="bg-transparent py-4 pr-5 border border-white text-white" type="tel" placeholder="رقم الجوال">
                    <input class="bg-transparent py-4 pr-5 border border-white text-white" type="text" placeholder="عنوان الرسالة">
                </div>
                <div class="grid grid-cols-1 mt-12">
                    <input class="bg-transparent py-4 pr-5 border border-white text-white" type="text" placeholder="عنوان الرسالة">
                </div>
                <div class="flex justify-end"><button class="text-white mt-12 bg-thirdColor w-60 py-4 text-xl">ارسل الآن</button></div>
            </form>
            <div>
                    <p class="text-white text-xl">جميع الحقوق محفوظة لتطبيق الكمين 2021 - 2022</p>
            </div>
        </div>
    </section>
</template>
<script>
import TitleVue from './Title.vue'
export default{
    components:{
        TitleVue,
    }
}
</script>
<style scoped>
section{
    height: 214vh;
    overflow: hidden;
    background-image: url(../assets/footerbg.png);
    background-position: top;
    background-repeat: no-repeat;
}
.color h2{
    color: #FFAE53 !important;
}
</style>
