
import type { IconsUser } from '#build/components';
<template>
  <header>
  <ul class="flex gap-2">
    <li>
      <NuxtLink to="/">Home</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/images/">Images</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/my-account/" class="inline">Account <IconsUser /></NuxtLink>
    </li>
    <li>
      <NuxtLink to="/login/" class="inline">Login</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/register/" class="inline">Register</NuxtLink>
    </li>

  </ul>
  
</header>
</template>

