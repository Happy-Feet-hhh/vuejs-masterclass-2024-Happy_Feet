<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
const button_on_click = (_e: Event) => {
    count.value++;
};
const testClass = ref('testClass2');

const button_change_style = (_e: Event) => {
    testClass.value = testClass.value == 'testClass1' ? 'testClass2' : 'testClass1';
}
</script>

<template>
    <div>
        <h1>首页</h1>
        <RouterLink to="/projects">项目页</RouterLink>
        <br />
        <button v-bind:class="testClass" @click="button_on_click">count的数值为: {{ count }}</button>
        <button @click="button_change_style">点击改变上面button的样式</button>
        <br />
        <RouterLink to="/blogs">博客页面</RouterLink>
    </div>
</template>

<style scoped>
.testClass1 {
    color: red;
}

.testClass2 {
    color: blue;
}
</style>