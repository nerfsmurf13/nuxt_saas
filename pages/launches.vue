<template>
<div>
Launches SpaceX
</div>
<div class="grid grid-cols-5 gap-2">
<div v-for="launch in data" class="">
<div>{{ launch.mission_name }}</div>
<div><img :src="launch.links.mission_patch_small" alt=""></div>
</div>
</div>
</template>

<script setup>
const { data } = await useFetch('https://api.spacexdata.com/v3/launches')
</script>