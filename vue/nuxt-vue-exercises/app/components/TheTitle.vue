<script setup lang="ts">
    const prop = defineProps<{
        Title : string
    }>()
</script>

<template>
    <div>
        <h3>El titulo del prop: {{ prop.Title }}</h3>
    </div>
</template>