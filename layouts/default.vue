<template>
  <!-- Header -->
  <FrontHeader layout="default" />
  <!-- End Header -->

  <div class="default-wrapper">
    <slot />
  </div>

  <!-- Front News Letter -->
  <FrontFooterNewsLetter />
  <!-- End Front News Letter -->

  <!-- Front Footer -->
  <FrontFooter />
  <!-- End Front Footer -->
</template>

<style lang="scss" scoped>
.default-wrapper {
  min-height: 85vh;
}
</style>
