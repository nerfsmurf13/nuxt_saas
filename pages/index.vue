<template>
  <div>
    homepage
    <Alert />
    {{ counter }} <button @click="counter++" >+</button>
    </div>
</template>

<script setup>

const counter = useCounter();

</script>