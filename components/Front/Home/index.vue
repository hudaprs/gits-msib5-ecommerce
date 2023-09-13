<template>
  <section class="front-banner">
    <div class="front-wrapper flex items-center h-full pb-28">
      <div class="flex flex-col gap-20">
        <div class="flex flex-col z-10 gap-8 hero-title">
          <h1 class="text-6xl text-gray-900 font-semibold">
            Welcome to GITS Commerce
          </h1>
          <p class="text-20 font-normal text-gray-600">
            Morpheme is a next-gen financial technology company in the process
            of reinventing banking.
          </p>
        </div>
        <div class="cart"></div>
        <div>
          <VBtn class="btn-shopping-cart" color="primary" size="2xl">
            <template #prefix>
              <img
                src="@/assets/images/icon-shopping-cart.png"
                alt="Shopping Cart"
              />
            </template>
            Start Shopping
          </VBtn>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.front-banner {
  background: linear-gradient(180deg, #d8eefd 14.05%, #fff 100%);
  height: 100vh;

  .cart {
    background: url('@/assets/images/hero-cart.png') no-repeat center
      center/cover;
    width: 1150px;
    height: 766px;
    object-fit: cover;
    position: absolute;
    display: flex;
    top: 10%;
    right: 0;
  }

  .hero-title {
    width: 580px;

    h1 {
      line-height: 72px;
    }
  }

  .btn-shopping-cart {
    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
