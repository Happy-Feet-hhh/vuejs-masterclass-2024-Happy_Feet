<script setup lang="ts">

</script>

<template>
    <div class="blog-list">
        <slot></slot>
    </div>
</template>

<style scoped>
.blog-list {
    display: flex;
    flex-direction: coyumn;
    /*改为纵向排列*/
    align-items: center;
    gap: 20px;
    padding: 0;
}
</style>