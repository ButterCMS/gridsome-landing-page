<!-- ./src/components/Contact.vue -->

<script>
export default {
  name: "Contact",
  props: {
    details: String,
    caption: String,
    title: String,
  }
};
</script>
<template>
  <div class="contact-cont">
    <!-- header title -->
    <h1>{{ title }}</h1>
    <div class="contact-cont__contact">
    <div>
      <h2>{{caption}}</h2>
      <div class="">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div v-html="details"></div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300&family=Righteous&display=swap");

.contact-cont {
  @apply py-24 relative overflow-hidden flex-col flex gap-4 justify-center items-center text-center;
  font-family: "Chakra Petch", sans-serif;
}

.contact-cont h1{
  @apply text-4xl text-white mb-10;
  font-family: 'Righteous', cursive;

}

.contact-cont__contact{
  @apply py-10;
}

.contact-cont__contact h2{
  @apply text-3xl font-semibold mb-4;
}


</style>
