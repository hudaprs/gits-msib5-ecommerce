<script lang="ts" setup>
const GITS_LOGO = 'gits-logo'
</script>

<template>
  <nav>
    <div
      class="front-wrapper flex flex-col items-center md:flex-row justify-between h-full"
    >
      <!-- Logo -->
      <div class="logos">
        <NuxtImg :src="`/${GITS_LOGO}.png`" />
        <img
          src="@/assets/images/gits-logo-name.png"
          alt="GITS Name E-Commerce"
        />
      </div>
      <!-- End Logo -->

      <!-- Menu -->
      <!-- End Menu -->

      <!-- Buttons or Menu  -->
      <div>
        <p class="need-help text-blue-700">Need Help?</p>
      </div>
      <!-- End Buttons or Menu  -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: rgba(255, 255, 255, 1);
  height: 80px;
  width: 100%;
  border-bottom: 1px solid var(--color-gray-200);
}

img {
  width: 32px;
  height: 32px;
}

.logos {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 10px;

  img:nth-child(2) {
    width: 100px;
    height: 32px;
  }
}

.need-help {
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  &:hover {
    cursor: pointer;
  }
}
</style>
