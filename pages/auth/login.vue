<script lang="ts" setup>
definePageMeta({
  layout: 'auth'
})

useHead({
  title: 'GITS E-Commerce - Login',
  meta: [{ name: 'description', content: 'GITS E-Commerce Login Page' }]
})
</script>

<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div class="card">
      <div class="header flex items-center justify-center flex-col gap-2">
        <img src="@/assets/images/gits-logo.png" alt="GITS Logo" />
        <p class="text-18 text-gray-900 font-semibold">
          Log in to your account
        </p>
        <p class="text-14 text-gray-600 font-normal">
          Welcome back! Please enter your detail.
        </p>
      </div>
      <div class="body flex flex-col gap-3">
        <!-- Email -->
        <VInput label="Email" placeholder="Enter your email" />
        <!-- End Email -->

        <!-- Password -->
        <VInput label="Password" placeholder="Enter your password" />
        <!-- End Password -->

        <!-- Remember / Forgot Password -->
        <div class="flex justify-between my-2">
          <VCheckbox label="Remember for 30 days" />
          <p class="text-primary-700 font-semibold cursor-pointer">
            Forgot Password
          </p>
        </div>
        <!-- End Remember / Forgot Password -->
      </div>
      <div class="flex flex-col gap-4">
        <VBtn color="primary" block> Sign in </VBtn>
        <VBtn block>
          <template #prefix>
            <img
              src="@/assets/images/social-google.png"
              alt="Login With Google"
              class="google-icon"
            />
          </template>
          Sign in with Google
        </VBtn>

        <p class="text-14 text-gray-600 mt-4 font-normal text-center">
          Don't have an account?
          <span class="text-primary-700 cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  padding: 30px 20px;
  border: 1px solid var(--gray-200);
  background-color: #fff;
  border-radius: 12px;
  box-shadow:
    0px 8px 8px -4px rgba(16, 24, 40, 0.03),
    0px 20px 24px -4px rgba(16, 24, 40, 0.08);
  width: 400px;

  .header {
    img {
      width: 32px;
      height: 32px;
    }
  }

  .body {
    margin: 20px 0px;
  }
}

.google-icon {
  width: 24px;
  height: 24px;
}
</style>
