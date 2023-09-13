<script lang="ts" setup>
// Images
import MensFashionImage from '@/assets/images/home-category-mens-fashion.svg'
import WomensFashionImage from '@/assets/images/home-category-womens-fashion.svg'
import BicycleImage from '@/assets/images/home-category-bicycle.svg'
import HandphoneImage from '@/assets/images/home-category-handphone.svg'
import HobbiesAndCollectionImage from '@/assets/images/home-category-hobbies-and-collection.svg'
import HouseholdImage from '@/assets/images/home-category-household.svg'

const categories = [
  { title: "Men's Fashion", image: MensFashionImage },
  { title: "Women's Fashion", image: WomensFashionImage },
  { title: 'Bicycle', image: BicycleImage },
  { title: 'Handphone', image: HandphoneImage },
  { title: 'Hobbies and Collections', image: HobbiesAndCollectionImage },
  { title: 'Household', image: HouseholdImage }
]
</script>

<template>
  <div class="bg-white front-wrapper home-categories-wrapper">
    <h2 class="front-header">Categories</h2>

    <div class="flex my-12 items-baseline justify-between">
      <div
        v-for="category of categories"
        class="flex items-center flex-col justify-around text-center gap-4"
      >
        <img :src="category.image" :alt="category.title" />
        <p class="text-16 text-black-400 font-semibold">{{ category.title }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-categories-wrapper {
  height: 40vh;
  padding: 20px 0px;
}

p {
  width: 138px;
}
</style>
