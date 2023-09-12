<script lang="ts" setup>
import AngelListImage from '@/assets/images/social-angellist.png'
import DribbbleImage from '@/assets/images/social-dribbble.png'
import FacebookImage from '@/assets/images/social-facebook.png'
import GitHubImage from '@/assets/images/social-github.png'
import LinkedInImage from '@/assets/images/social-linkedin.png'
import TwitterImage from '@/assets/images/social-twitter.png'

const footerMenus = [
  {
    title: 'Product',
    children: [
      { title: 'Overview' },
      { title: 'Features' },
      { title: 'Solutions' },
      { title: 'Tutorials' },
      { title: 'Pricing' },
      { title: 'Releases' }
    ]
  },
  {
    title: 'Company',
    children: [
      { title: 'About Us' },
      { title: 'Careers' },
      { title: 'Press' },
      { title: 'News' },
      { title: 'Media Kit' },
      { title: 'Contact' }
    ]
  },
  {
    title: 'Resources',
    children: [
      { title: 'Blog' },
      { title: 'Newsletter' },
      { title: 'Events' },
      { title: 'Help Centre' },
      { title: 'Tutorials' },
      { title: 'Supports' }
    ]
  },
  {
    title: 'Social',
    children: [
      { title: 'Twitter' },
      { title: 'LinkedIn' },
      { title: 'Facebook' },
      { title: 'GitHub' },
      { title: 'AngleList' },
      { title: 'Dribbble' }
    ]
  },
  {
    title: 'Legal',
    children: [
      { title: 'Terms' },
      { title: 'Privacy' },
      { title: 'Cookies' },
      { title: 'Licenses' },
      { title: 'Settings' },
      { title: 'Contact' }
    ]
  }
]
const footerSocialMenus = [
  { alt: 'AngelList', image: AngelListImage },
  { alt: 'Dribbble', image: DribbbleImage },
  { alt: 'Facebook', image: FacebookImage },
  { alt: 'GitHub', image: GitHubImage },
  { alt: 'LinkedIn', image: LinkedInImage },
  { alt: 'Twitter', image: TwitterImage }
]
</script>

<template>
  <footer class="bg-gray-800">
    <div class="front-wrapper pt-20 py-8 my-0 flex flex-col">
      <div class="flex flex-col md:flex-row gap-20">
        <!-- Introduction -->
        <div class="introduction flex flex-col gap-5">
          <!-- Image -->
          <div class="images flex items-center gap-2">
            <NuxtImg src="/gits-logo.png" />
            <NuxtImg src="/gits-logo-name-white.png" />
          </div>
          <!-- End Image -->

          <p class="text-gray-200 text-16 font-normal">
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>
        <!-- End Introduction -->

        <!-- Footer Menu List -->
        <div class="grid grid-cols-5 gap-24">
          <div
            v-for="footerMenu of footerMenus"
            :key="footerMenu.title"
            class="flex flex-col gap-3"
          >
            <p class="text-14 font-semibold text-gray-300">
              {{ footerMenu.title }}
            </p>
            <ul class="flex flex-col gap-4 text-white">
              <li
                v-for="footerMenuItem of footerMenu.children"
                :key="`menu-item-${footerMenuItem.title}`"
                class="text-16 text-gray-200 font-semibold cursor-pointer hover:text-gray-300"
              >
                {{ footerMenuItem.title }}
              </li>
            </ul>
          </div>
        </div>
        <!-- End Footer Menu List -->
      </div>

      <!-- Divider -->
      <div class="mt-10 mb-5">
        <VDivider />
      </div>
      <!-- End Divider -->

      <!-- Social List -->
      <div
        class="social-media-list flex items-center justify-between flex-col md:flex-row"
      >
        <p class="text-gray-500 text-16 font-normal">
          &copy; 2077 Morpheme UI. All rights reserved.
        </p>
        <ul class="flex items-center gap-5">
          <li
            v-for="footerSocialMenu of footerSocialMenus"
            :key="footerSocialMenu.alt"
          >
            <img :src="footerSocialMenu.image" :alt="footerSocialMenu.alt" />
          </li>
        </ul>
      </div>
      <!-- End Social List -->
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  height: auto;
}

.introduction {
  width: 320px;
}

.images {
  img:first-child {
    width: 32px;
    height: 32px;
  }

  img:nth-child(2) {
    width: 100px;
    height: 32px;
  }
}

.v-divider {
  border: 1px solid var(--color-gray-600);
}

.social-media-list {
  img {
    width: 24px;
    height: 24px;

    &:hover {
      color: var(--color-gray-300);
      cursor: pointer;
    }
  }
}
</style>
