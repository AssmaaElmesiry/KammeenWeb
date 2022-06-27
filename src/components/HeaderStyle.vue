<template>
    <header class=" h-auto w-full z-50 relative text-white py-5 transition ease-in duration-300">
        <div class="container mx-auto sm:px-6 px-4 flex flex-col justify-center items-center">
            <div class="flex lg:mt-5 lg:mb-12">
                <img src="../assets/logo.png" class="w-3/4 sm:w-full"/>
            </div>
            <nav class="relative flex justify-center items-center mx-auto my-0 transition ease-in duration-300 bg-secondColor py-9 px-12 rounded-full ">
                <ul v-show="!mobile" class="flex justify-around w-full ">
                    <li class="ml-16"> <a class="text-white text-xl relative transition ease-in duration-300" href="/">الرئيسية</a></li>
                    <li class="ml-16"> <a class="text-white text-xl relative transition ease-in duration-300" href="#aboutme">عن التطبيق </a> </li>
                    <li class="ml-16"> <a class="text-white text-xl relative transition ease-in duration-300" href="#service">خدمات التطبيق</a> </li>
                    <li class="ml-16"> <a class="text-white text-xl relative transition ease-in duration-300" href="#portfolio">كيف يعمل التطبيق</a></li>
                    <li class="ml-16"> <a class="text-white text-xl relative transition ease-in duration-300" href="#connectme">التحميل </a></li>
                    <li class=""> <a class="text-white text-xl relative transition ease-in duration-300" href="#connectme">اتصل بنا </a></li>
                </ul>
                <div class="icon" @click="toggleMobileNav">
                    <fa icon="bars" v-show="mobile" :class="{'icon-active': mobileNav}" />
                </div>
                <transition name="mobile-nav">
                    <ul v-show="mobileNav" class="flex flex-col fixed w-3/4 h-full bg-mainColor top-0 right-0 p-6 text-center max-w-dropdownWidth">
                        <div class="flex justify-center mb-10">
                            <img src="../assets/logo.png" class="w-1/3"/>
                        </div>
                        <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300 hover:text-secondColor" href="/">الرئيسية</a></li>
                        <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300 hover:text-secondColor" href="#aboutme">عن التطبيق </a> </li>
                        <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300 hover:text-secondColor" href="#service">خدمات التطبيق</a> </li>
                        <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300 hover:text-secondColor" href="#portfolio">كيف يعمل التطبيق</a></li>
                        <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300 hover:text-secondColor" href="#connectme">التحميل </a></li>
                        <li class="ml-0 py-4 px-0"> <a class="text-white font-bold transition ease-in duration-300 hover:text-secondColor" href="#connectme">اتصل بنا </a></li>
                    </ul>
                </transition>
            </nav>
        </div>
    </header>

    <slot />
</template>

<script>
    export default{
        data() {
            return {
                scrolledNav: null,
                mobile: false,
                mobileNav: false,
                windowWidth: null,
            }
        },
        created(){
            window.addEventListener('resize', this.checkScreen);
            this.checkScreen();
        },
        mounted() {
            window.addEventListener("scroll", this.updateScroll)
        },
        methods: {
            toggleMobileNav(){
                this.mobileNav = !this.mobileNav;
            },
            updateScroll() {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 50){
                    this.scrolledNav = true;
                    return;
                }
                this.scrolledNav = false;
            },
            checkScreen(){
                this.windowWidth = window.innerWidth;
                if (this.windowWidth <= 991){
                    this.mobile = true;
                    return;
                }
                this.mobile = false;
                this.mobileNav = false;
            }
        },
    }
</script>


<style>

li:hover a{
    color: #2E2851;
    transition: .6s ease all;
}
li a::before{
    content: "";
    width: 0;
    height: 1px;
    position: absolute;
    left: 0;
    right: auto;
    bottom: -3px;
    transition: width .6s cubic-bezier(.25,.8,.25,1) 0s;
    background: #2E2851;
}
li:hover a::before{
    width: 100%;
    left: auto;
    right: 0;
    bottom: -3px;
}
a.router-link-exact-active {
    color: #2E2851 !important;
}
.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition:  1s ease all;
}
.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(300px);
}
.mobile-nav-enter-to{
    transform: translateX(0);
}
@media(min-width: 1140px){
    .link{
        transition: .5s ease all;
        padding-bottom: 4px;
        border-bottom: 1px solid transparent;
    }
    .link:hover{
        color: #fff;
        border-color: #fff;
    }
}
@media(max-width: 991px){
    header .container{
        flex-direction: row;
        justify-content: space-between;
    }
    header nav{
        margin: 0 !important;
        padding: 0 !important;
        width: 40px !important;
        height: 40px !important;
    }
}
</style>
