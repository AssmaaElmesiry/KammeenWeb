<template>
    <div class="flex items-center mb-8">
        <h2 class="relative p-4 text-mainColor text-5xl font-bold"><slot></slot></h2>
    </div>
</template>
<style scoped>
h2::before{
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 10px;
    height: 67px;
    background-color: #FFAE53;
}
</style>