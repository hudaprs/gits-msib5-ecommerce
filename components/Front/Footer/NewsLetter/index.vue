<template>
  <div class="bg-gray-900 py-14">
    <div class="front-wrapper flex flex-col md:flex-row justify-between">
      <!-- Description -->
      <div class="flex flex-col gap-2">
        <p class="text-white font-semibold text-20">Join Our Newsletter</p>
        <p class="text-gray-200 text-16 font-normal">
          Join over 4,000+ startups already growing with Morpheme.
        </p>
      </div>
      <!-- End Description -->

      <!-- Input -->
      <div class="flex flex-col md:flex-row items-center gap-3">
        <VInput
          placeholder="Enter your email"
          class="input-email"
          style="width: 269px; height: 48px"
        />
        <VBtn color="primary" class="btn-subscribe"> Subscribe </VBtn>
      </div>
      <!-- End Input -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-subscribe {
  width: 115px !important;
  height: 48px !important;
  font-size: 16px !important;
}
</style>
