<script lang="ts" setup>
// Types
import { TFrontHeaderProps } from './index.type'

// Define props
const props = defineProps<TFrontHeaderProps>()

const GITS_LOGO = 'gits-logo'
</script>

<template>
  <nav
    class="w-full"
    :class="{
      'bg-white': props.layout === 'auth',
      'bg-[#d8edfc]': props.layout === 'default',
      border: props.layout === 'auth',
      'border-b-gray-200': props.layout === 'auth'
    }"
  >
    <div
      class="front-wrapper flex flex-col items-center md:flex-row justify-between h-full"
    >
      <!-- Logo -->
      <NuxtLink to="/">
        <div class="logos cursor-pointer">
          <NuxtImg :src="`/${GITS_LOGO}.png`" />
          <img
            src="@/assets/images/gits-logo-name.png"
            alt="GITS Name E-Commerce"
          />
        </div>
      </NuxtLink>
      <!-- End Logo -->

      <!-- Menu -->
      <!-- End Menu -->

      <!-- Buttons or Menu  -->
      <div>
        <div v-if="props.layout === 'default'" class="flex items-center gap-3">
          <NuxtLink
            to="/auth/login"
            class="btn btn-default btn--md btn--text cursor-pointer"
          >
            Log in
          </NuxtLink>
          <NuxtLink
            to="/auth/signup"
            class="btn btn-primary btn--md cursor-pointer"
          >
            Sign up
          </NuxtLink>
        </div>
        <div v-if="props.layout === 'auth'">
          <p class="need-help text-blue-700">Need Help?</p>
        </div>
      </div>
      <!-- End Buttons or Menu  -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  height: 80px;
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
