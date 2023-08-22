<!-- ./src/components/About.vue -->

<script>
export default {
  name: "About",
  // props for title, caption, description and image
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="about-cont">
    <!-- header title -->
    <h2>
      {{ title }}
    </h2>
    <div class="about-cont__details">
      <div class="about-cont__details__imgcont">
        <!-- image container -->
        <img :src="image" />
      </div>
      <div class="about-cont__details__description">
        <!-- description -->
        <h3>{{ caption }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300&family=Righteous&display=swap");

.about-cont {
  @apply h-screen relative overflow-hidden flex-col bg-white flex gap-4 justify-center items-center;
  font-family: "Chakra Petch", sans-serif;
}

/* .about-cont::after {
  content: "";
  @apply hidden md:inline-block absolute top-[-200px] md:top-[-200px] w-full h-80 bg-[#faca42];
  border-radius: 0 0 50% 50%/0 0 100% 100%;
  transform: scaleX(1.5);
} */

.about-cont h2 {
  @apply text-4xl mt-24 mb-5;
}

.about-cont__details {
  @apply flex w-4/5 flex-col md:flex-row justify-center items-center gap-10 md:gap-24;
}

.about-cont__details__imgcont {
  @apply w-1/2 h-full flex justify-center items-center;
}

.about-cont__details__imgcont img {
  @apply w-[500px]  shadow-2xl;
}

.about-cont__details__description {
  @apply w-4/5 md:w-1/2 h-full flex gap-8 flex-col;
}

.about-cont__details__description h3 {
  @apply text-lg font-bold;
}
</style>
