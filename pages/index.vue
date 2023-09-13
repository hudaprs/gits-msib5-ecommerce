<script lang="ts" setup>
definePageMeta({
  layout: 'default'
})

useHead({
  title: 'GITS E-Commerce - Homepage',
  meta: [{ name: 'description', content: 'Welcome to GITS E-Commerce' }]
})
</script>

<template>
  <div>
    <FrontHome />
    <FrontHomeCategories />
  </div>
</template>
