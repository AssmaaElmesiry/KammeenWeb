<template>
    <section class="bg-SectionBg pt-24 pb-36">
        <div class="container mx-auto sm:px-6 px-4 ">
            <TitleVue>آلية العمل</TitleVue>
        </div>
        <div class="inner relative">
            <div class="container mx-auto sm:px-6 px-4 flex justify-between">
                <div class="item w-36 h-36 bg-white border border-solid border-thirdColor absolute bottom-1/4 right-1/4">gfgfgf</div>
                <div class="item w-36 h-36 bg-white border border-solid border-thirdColor">gggg</div>
                <div class="item w-36 h-36 bg-white border border-solid border-thirdColor">ggg</div>
                <div class="item w-36 h-36 bg-white border border-solid border-thirdColor">ggg</div>
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
.inner{
    background-image: url(../assets/road.png);
    height: 1225px;
    background-repeat: no-repeat;
}
.inner .item::before{
    content: "";
    bottom: 100%;
    height: 205px;
    width: 2px;
    position: absolute;
    background-color: red;
    right: 50%;
    transform: translate(-50%);
}
.inner .item::after{
    content: "";
    bottom: 100%;
    height: 50px;
    width: 50px;
    position: absolute;
    background-color: blue;
    border: 1px solid #fff;
    right: 50%;
}
</style>