<template>
    <section class="">
        <div class="relative bg flex">
            <div class="w-1/2">
                <img src="../assets/appscreen.png"/>
            </div>
            <div class="w-1/2 text-right self-center mr-24">
                <span class="text-xl text-thirdColor">حمل تطبيقنا الآن</span>
                <h2 class="text-4xl text-white mt-8 mb-9">التطبيق متاح مجانًا في متجر التطبيقات</h2>
                <span class="text-lg text-white">يمكنك تحميل التطبيق والاستفادة من جميع الخدمات التي يقدمها التطبيق</span>
                <div class="flex mt-16">
                    <button class="w-40 h-16 flex justify-center  items-center bg-transparent border-solid border-2 border-thirdColor rounded-2xl ml-16 hover:bg-thirdColor transition ease-in duration-300">
                        <div class="flex flex-col">
                            <p class="text-base text-white">Download for</p>
                            <span class="text-white font-bold text-xl">Android</span>
                        </div>
                        <fa class="text-white text-4xl" :icon="['fab' , 'google-play']"/>
                    </button>
                    <button class="w-40 h-16 flex justify-center items-center bg-thirdColor border-solid border-2 border-thirdColor rounded-2xl hover:bg-transparent transition ease-in duration-300">
                        <div class="flex flex-col">
                            <p class="text-base text-white">Download for</p>
                            <span class="text-white font-bold text-xl">iOS</span>
                        </div>
                        <fa class="text-white text-4xl" :icon="['fab' , 'apple']"/>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
section{
    background-image: url(../assets/bg.png);
    background-position: center;
    background-size: cover;
    position: relative;
}
section::before{
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 10%;
}
section .bg{
    background-color: #2E2851D6;
}
</style>