<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();   // 可以使用useRoute获取当前路径的动态信息(如path参数)
const params = route.params;
</script>

<template>
    <div>
        <h1>项目 {{ params?.id }} </h1>
    </div>
</template>