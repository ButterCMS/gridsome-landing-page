<!-- ./src/components/Hero.vue -->

<script>
export default {
  name: "Hero",
  // props for caption, description, image and cta text
  props: {
    caption: {
      type: String,
      required: true,
      // default: ""
    },
    description: {
      type: String,
      required: true,
      // default: ""
    },
    image: {
      type: String,
      required: true,
      // default: ""
    },
    cta: {
      type: String,
      required: true,
      // default: ""
    },
  },
};
</script>
<template>
  <div class="landing-cont">
    <div class="landing-cont__hero">
      <div class="landing-cont__hero__text">
        <h1 class="title">
          {{ caption }}
        </h1>
        <p class="subtitle">
          {{ description }}
        </p>
        <g-link class="cta">
          {{ cta }}
        </g-link>
      </div>
      <div class="landing-cont__hero__image">
        <!-- hero image -->
        <img :src="image" />
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300&family=Righteous&display=swap");

.landing-cont {
  @apply h-[80vh] px-5 flex justify-center items-center;
}

.landing-cont__hero {
  @apply flex justify-center items-center flex-col md:flex-row gap-24 w-full;
}

.landing-cont__hero__text {
  font-family: "Righteous", cursive;
}

.landing-cont__hero__text {
  @apply w-full md:w-2/5;
}
.landing-cont__hero__text .title {
  @apply text-[35px] md:text-[65px] text-white;
}

.landing-cont__hero__text .subtitle {
  @apply text-[15px] md:text-[17px];
}

.landing-cont__hero__text .cta {
  @apply mt-5 inline-block rounded-tl-2xl rounded-br-2xl bg-white py-2 px-6 shadow-lg;
}

.landing-cont__hero__image img {
  @apply w-[200px] md:w-[400px];
}
</style>
