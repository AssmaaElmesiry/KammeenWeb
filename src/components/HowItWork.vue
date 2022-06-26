<template>
    <section class="bg-SectionBg pt-24 pb-36">
        <div class="container mx-auto sm:px-6 px-4 ">
            <TitleVue class="text-mainColor">آلية العمل</TitleVue>
        
        <div class="inner relative">
            <div class="relative road">
                <img src="../assets/road.png"/>
            </div>
            <div class="absolute top-0 w-full">
                <div  class="flex all mask1">
                    <div class="flex flex-col items-center justify-center">
                        <div class="item item1 w-24 h-24 bg-white border-4 rounded-full border-solid border-thirdColor flex justify-center items-center">
                            <img src="../assets/car.svg"/>
                        </div>
                    </div>
                    <div class="desc">
                        <h2 class="text-thirdColor">نص تجريبى</h2>
                        <p class="text-sm text-justify">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                </div>
                <div  class="flex all mask2">
                    <div class="flex flex-col items-center justify-center">
                        <div class="item item2 w-24 h-24 bg-white border-4 rounded-full border-solid border-thirdColor flex justify-center items-center">
                            <img src="../assets/car.svg"/>
                        </div>
                    </div>
                    <div class="desc">
                        <h2 class="text-thirdColor">نص تجريبى</h2>
                        <p class="text-sm text-justify">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                </div>
                <div class="flex all mask3">
                    <div class="flex flex-col items-center justify-center">
                        <div class="item item3 w-24 h-24 bg-white border-4 rounded-full border-solid border-thirdColor flex justify-center items-center">
                            <img src="../assets/car.svg"/>
                        </div>
                    </div>
                    <div class="desc">
                        <h2 class="text-thirdColor">نص تجريبى</h2>
                        <p class="text-sm text-justify">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                </div>
                <div  class="flex all mask4">
                    <div class="flex flex-col items-center justify-center">
                        <div class="item item4 w-24 h-24 bg-white border-4 rounded-full border-solid border-thirdColor flex justify-center items-center">
                            <img src="../assets/car.svg"/>
                        </div>
                    </div>
                    <div class="desc">
                        <h2 class="text-thirdColor">نص تجريبى</h2>
                        <p class="text-sm text-justify">
                                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                    </div>
                </div>
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

.inner .item img{
    width: 60%;
}
.inner .circle{
    width: 30px;
    height: 30px;
    background-color: #FFAE53;
    border-radius: 100%;
    border: 2px solid #fff;
}
.inner .line{
    height: 150px;
    width: 5px;
    background-color: #FFAE53;
}
.inner .mask1{
    margin-right: 7%;
    padding-top: 6%;
}
.inner .mask2{
    flex-direction: row-reverse;
    margin-left: 7%;
    padding-top: 8%;
}
.inner .mask3{
    margin-right: 7%;
    padding-top: 9%;
}
.inner .mask4{
    flex-direction: row-reverse;
    margin-left: 7%;
    padding-top: 8%;
}
.inner .all:nth-child(2n+1) .desc{
    width: 333px;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    margin-right: 15px;
    padding: 10px;
}

.inner .all:nth-child(2n+1) .desc::before{
    position: absolute;
    right: -10px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 10px solid #fff;
}
.inner .all:nth-child(2n) .desc{
    width: 333px;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    margin-left: 15px;
    padding: 10px;
}

.inner .all:nth-child(2n) .desc::before{
    position: absolute;
    left: -10px;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    width: 0px;
    height: 0px;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid #fff;
}
@media(max-width: 1200px){
    .inner .all:nth-child(2n+1) .desc,
    .inner .all:nth-child(2n) .desc{
        padding: 5px;
    }
    .inner .mask1{
        margin-right: 7%;
        padding-top: 5%;
    }
    .inner .mask2{
        flex-direction: row-reverse;
        margin-left: 7%;
        padding-top: 7%;
    }
    .inner .mask3{
        margin-right: 7%;
        padding-top: 6%;
    }
    .inner .mask4{
        flex-direction: row-reverse;
        margin-left: 7%;
        padding-top: 6%;
    }

}
@media(max-width: 991px){
    .inner .all:nth-child(2n+1) .desc,
    .inner .all:nth-child(2n) .desc{
        padding: 10px;
    }
    .inner .road{
        display: none;
    }
    .inner div{
        position: relative;
    }
}
@media(max-width: 540px){
.inner .mask1,.inner .mask2,.inner .mask3,.inner .mask4{
    margin: 0;
}
.inner .all{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.inner .all:nth-child(2n+1) .desc{
    width: 333px;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    padding: 10px;
    margin-right: 0;
    margin-top: 15px;
}

.inner .all:nth-child(2n+1) .desc::before{
    position: absolute;
    right: 50%;
    top: -20px;
    transform: translatex(50%);
    content: "";
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
}
.inner .all:nth-child(2n) .desc{
    width: 333px;
    border-radius: 15px;
    background-color: #fff;
    position: relative;
    padding: 10px;
    margin-left: 0;
    margin-top: 15px;
}

.inner .all:nth-child(2n) .desc::before{
    position: absolute;
    right: 50%;
    top: -20px;
    transform: translatex(50%);
    content: "";
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
}
}
</style>