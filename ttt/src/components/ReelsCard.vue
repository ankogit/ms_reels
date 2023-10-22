<template>
    <div class="card">
        <!-- <img :src="imageSrc" alt="Card image"> -->
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String
    }
})
</script>

<style>
.card {
    width: 18rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    overflow: hidden;
}

.card img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
}

.card-body {
    padding: 1rem;
}
</style>