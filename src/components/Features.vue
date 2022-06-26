<template>
    <section class="container mx-auto sm:px-6 px-4 pt-24">
        <TitleVue class="text-mainColor">مميزات التطبـيـق</TitleVue>
        <div class="flex ">
            <ul  class="flex justify-between w-full">
                <ul class="w-1/2 flex flex-col mt-12">
                    <li class="flex mb-36" v-for="(item,index) in item1" :key="index">
                        <div class="border-2 border-solid border-thirdColor w-24 h-24 rounded-2xl">
                            <img :src="item.icon" class=" p-6" />
                        </div>
                        <div class="w-2/3 mr-7">
                            <h2 class="text-right mb-3 text-thirdColor">{{item.title}}</h2>
                            <p class="text-justify">{{item.desc}}</p>
                        </div>
                        <img />
                    </li>

                </ul>
                    <div class="w-auto h-fit relative">
                        <div class="relative overflow-hidden">
                            <img :src="src" class="w-full h-full" />
                        </div>
                        <img :src="main"  @mouseover="hover = true"
    @mouseleave=" hover= false" class="absolute left-4 top-topMainImg w-mainImg"/>
                    </div>
                <ul class="w-1/2 flex flex-col items-center mt-12 mr-16">
                    <li  class="flex mb-36" v-for="(item,index) in item2" :key="index">
                        <div class="border-2 border-solid border-thirdColor w-24 h-24 rounded-2xl">
                            <img :src="item.icon" class=" p-6" />
                        </div>
                        <div class="w-2/3 mr-7">
                            <h2 class="text-right mb-3 text-thirdColor">{{item.title}}</h2>
                            <p class="text-justify">{{item.desc}}</p>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
            <img  />
    </section>
</template>
<script>
import TitleVue from './Title.vue'

export default{
    data() {
        return {
            hover: false,
            src: "../src/assets/mobile.png",
            main: ("../src/assets/screen.png"),
            // maskImg: ("../src/assets/man.png"),
            item1:[
                {
                    id:1,
                    icon: '../src/assets/car.svg',
                    image:"../src/assets/man.png",
                    title: 'نص تجريبى',
                    desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق',
                },
                {
                    id:2,
                    icon: '../src/assets/car.svg',
                    image:"../src/assets/road.png",
                    title: 'نص تجريبى',
                    desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق',
                },
                {
                    id:3,
                    icon: '../src/assets/car.svg',
                    image:"../src/assets/man.png",
                    title: 'نص تجريبى',
                    desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق',
                },
            ],
            item2:[
                {
                    id:1,
                    icon: '../src/assets/car.svg',
                    image:"../src/assets/man",
                    title: 'نص تجريبى',
                    desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق',
                },
                {
                    id:2,
                    icon: '../src/assets/car.svg',
                    image:"../src/assets/man",
                    title: 'نص تجريبى',
                    desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق',
                },
                {
                    id:3,
                    icon: '../src/assets/car.svg',
                    image:"../src/assets/man",
                    title: 'نص تجريبى',
                    desc: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق',
                },
            ],
            
        }
    },
    components:{
        TitleVue,
    },
    methods: {
        img_changer :function(){
            if (hover){
               main = "../src/assets/man.png"
            }
            else{
                main = "../src/assets/screen.png"
            }
            }
	},
}
</script>
