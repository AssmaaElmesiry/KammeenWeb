<template>
    <section class="pt-24 pb-36 overflow-hidden">
        <div class="container mx-auto sm:px-6 px-4">
            <div class="flex flex-row">
                <div class="w-1/2 mask">
                    <TitleVue class="text-mainColor">عن التطبيق</TitleVue>
                    <p class="text-black text-xl text-justify leading-9">
                    هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع 
                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق
                    هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً
                    </p>
                </div>
                <div class="w-1/2 mask">
                    <img src="../assets/aboutmobile.png" class="md:mr-28"/>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import TitleVue from "./Title.vue";
export default{
    components:{
        TitleVue,
    }
}
</script>
<style scoped>
@media(max-width: 991px){
    .container >div{
        display: flex;
        flex-direction: column-reverse !important;
    }
    .container .mask{
    width: 100% !important;
    }
}
</style>