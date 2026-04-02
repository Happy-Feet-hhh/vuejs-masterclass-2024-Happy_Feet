<script setup lang="ts">
defineProps({
    blog: {
        type: Object,
        required: true,
    }
})
</script>

<template>
    <div class="blog-card">
        <h3 class="blog-title">{{ blog.title }}</h3>
        <p class="blog-meta">作者：{{ blog.author }} | 日期：{{ blog.date }}</p>
        <p>{{ blog.content.substring(0, 100) }}...</p>
    </div>
</template>

<style scoped>
.blog-card {
    cursor: pointer;
    width: 600px;
    height: 150px;
    padding: 20px;
    border: ipx solid #ddd;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, background-color 0.3s ease;
}
</style>
