<script lang="ts" setup>
useHead({
  title: 'GITS E-Commerce - Auth',
  meta: [{ name: 'description', content: 'GITS E-Commerce Auth' }]
})
</script>

<template>
  <!-- Header -->
  <FrontHeader layout="auth" />
  <!-- End Header -->

  <div class="auth-wrapper">
    <div class="grid grid-cols-2">
      <!-- Image For Flash Sale -->
      <div class="flash-sale flex flex-row items-center justify-center">
        <img
          class="img"
          src="@/assets/images/flash-sale-12-12.png"
          alt="Flash Sale 12-12"
        />
      </div>
      <!-- End Image For Flash Sale -->

      <!-- Content -->
      <div>
        <slot />
      </div>
      <!-- End Content -->
    </div>
  </div>

  <!-- Front News Letter -->
  <FrontFooterNewsLetter />
  <!-- End Front News Letter -->

  <!-- Front Footer -->
  <FrontFooter />
  <!-- End Front Footer -->
</template>

<styled lang="scss" scoped>
.auth-wrapper {
  min-height: 85vh;
  background: url('@/assets/images/flash-sale-bg.png') no-repeat center
    center/cover;
}

.flash-sale {
  .img {
    width: 720px;
    height: 720px;
  }
}
</styled>
