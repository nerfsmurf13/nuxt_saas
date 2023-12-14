<template>
  <div>
    image {{ $route.params.id }}
    </div>
</template>

<script setup>
const nuxt = useNuxtApp()
console.log(nuxt);
</script>