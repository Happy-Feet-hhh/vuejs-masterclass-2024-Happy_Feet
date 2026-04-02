<script setup lang="ts">
import { ref } from 'vue';
import BlogItem from '@/components/BlogItem.vue';
import BlogList from '@/components/BlogList.vue';

const blogs = ref([
    {
        id: 1,
        title: '理解现代 Javascript 框架',
        author: '李华',
        date: '2024-05-28',
        content: '在这篇文章中，我们将深入探讨现代 Javascript 框架，如 React、Vue、Solidjs、Svelte等...',
        comments: [
            { author: '张伟', date: '2024-05-29', content: '感谢分享，受益匪浅!' },
            { author: '王敏', date: '2024-05-30', content: '一直对Vue很感兴趣额，这篇文字接了我的燃眉之急。' }
        ]
    },
    {
        id: 2,
        title: '微服务架构的优缺点',
        author: '王强',
        date: '2024-05-25',
        content: '本文介绍了微服务架构的基本概念、优缺点，并分析了在不同场景下的适用性',
        comments: [
            { author: '刘敏', date: '2024-05-26', content: '微服务确实很有用，但实施起来...' },
            { author: '赵丽', date: '2024-05-27', content: '很好的总结，特别喜欢你对优化部分的讲解。' }
        ]
    }
]);
</script>

<template>
    博客页面
    <!-- 传统形式 -->
    <!-- <ul>
        <li>{{ blogs.at(0)?.title }} - {{ blogs.at(0)?.author }} </li>
        <li>{{ blogs.at(1)?.title }} - {{ blogs.at(1)?.author }} </li>
    </ul> -->

    <!-- v-for形式 -->
    <BlogList>
        <li v-for="blog in blogs" :key="blog.id">
            <BlogItem :blog="blog" />
        </li>
    </BlogList>
</template>