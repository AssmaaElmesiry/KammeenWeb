<template>
    <section class="overflow-hidden">
        <div class="bg"><img src="../assets/footerbg.png"/> </div>
        <div class="lg:bg-transparent bg-mainColor">
            <div class="container mx-auto sm:px-6 px-4 -mt-mFooterT">
                <TitleVue class="text-thirdColor color">تواصل معنا</TitleVue>
                <div class="flex sm:flex-row flex-col mb-16">
                    <div class="flex">
                        <img src="../assets/email.svg" />
                        <div class="flex flex-col self-center text-right mr-4 text-white">
                            <label>
                                البريد الإلكتروني :
                            </label>
                            <a href="mailto:kameen@kameen.com" target="_blank">kameen@kameen.com</a>
                        </div>
                    </div>
                    <div class="flex sm:mr-44 mt-5">
                        <img src="../assets/phone-call.svg" />
                        <div class="flex flex-col text-right mr-4 text-white">
                            <label>
                                رقم الجوال :
                            </label>
                            <a href="tel:+012345678910" target="_blank">012345678910</a>
                        </div>
                    </div>
                </div>
                <form class="md:w-9/12 w-full mb-24">
                    <div  class="grid grid-cols-footerGrid gap-3">
                        <input class="bg-transparent py-4 pr-5 border border-white text-white" type="name" placeholder="الآسم">
                        <input class="bg-transparent py-4 pr-5 border border-white text-white" type="email" placeholder="البريد الألكترونى">
                        <input class="bg-transparent py-4 pr-5 border border-white text-white" type="tel" placeholder="رقم الجوال">
                        <input class="bg-transparent py-4 pr-5 border border-white text-white" type="text" placeholder="عنوان الرسالة">
                    </div>
                    <div class="mt-3 w-full">
                        <textarea rows="4" class="w-full bg-transparent py-4 pr-5 border border-white text-white" type="text" placeholder="عنوان الرسالة"></textarea>
                    </div>
                    <div class="flex justify-end"><button class="text-white mt-12 bg-thirdColor w-60 py-4 text-xl">ارسل الآن</button></div>
                </form>
                <div class="pb-6">
                        <p class="text-white sm:text-xl text-base">جميع الحقوق محفوظة لتطبيق الكمين 2021 - 2022</p>
                </div>
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
section .bg img{
    max-width: fit-content;
    width: 207%;
    display: flex;
    justify-content: center;
    margin-right: -40%;
}
.color h2{
    color: #FFAE53 !important;
}
</style>
