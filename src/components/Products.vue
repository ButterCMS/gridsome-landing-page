<!-- ./src/components/Product.vue -->

<script>
export default {
  name: "product",
  // prop for products
  props: {
    smoothies: {
      type: Array,
      required: true,
    },
  },
  created() {
    console.log(this.smoothies);
  },
  // data() {
  //   return {
  //     smoothies: [
  //       {
  //         id: 1,
  //         title: "Berry Blast",
  //         description: "Escape to the tropics with this tropical fruit medley.",
  //         price: "$5.99",
  //         image: "../smoothie1.png",
  //       },
  //       {
  //         id: 2,
  //         title: "Tropical Paradise",
  //         description: "Escape to the tropics with this tropical fruit medley.",
  //         price: "$6.99",
  //         image: "../smoothie2.png",
  //       },
  //       {
  //         id: 3,
  //         title: "Tropical Paradise",
  //         description: "Escape to the tropics with this tropical fruit medley.",
  //         price: "$6.99",
  //         image: "../smoothie3.png",
  //       },
  //       {
  //         id: 4,
  //         title: "Tropical Paradise",
  //         description: "Escape to the tropics with this tropical fruit medley.",
  //         price: "$6.99",
  //         image: "../smoothie4.png",
  //       },
  //       {
  //         id: 5,
  //         title: "Tropical Paradise",
  //         description: "Escape to the tropics with this tropical fruit medley.",
  //         price: "$6.99",
  //         image: "../smoothie5.png",
  //       },
  //       {
  //         id: 6,
  //         title: "Tropical Paradise",
  //         description: "Escape to the tropics with this tropical fruit medley.",
  //         price: "$6.99",
  //         image: "../smoothie6.png",
  //       },
  //     ],
  //   };
  // },
};
</script>
<template>
  <div class="product-cont">
    <!-- header title -->
    <h1>Our Products</h1>
    <div class="product-cont__details">
      <!-- product cards -->
      <div class="product__cards">
        <div
          v-for="smoothie in smoothies"
          :key="smoothie.id"
          class="card"
        >
          <img :src="smoothie.image"  :alt="smoothie.title" />
          <h3>{{ smoothie.name }}</h3>
          <p>{{ smoothie.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300&family=Righteous&display=swap");

.product-cont {
  @apply min-h-screen pb-24 relative overflow-hidden flex-col bg-white flex gap-4  items-center;
  font-family: "Chakra Petch", sans-serif;
}

.product-cont h1 {
  @apply text-4xl mt-24 mb-5;
}

.product-cont__details {
  @apply flex w-4/5 flex-col md:flex-row justify-center items-center gap-10 md:gap-24;
}

.product__cards {
  @apply grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grow;
  /* grid-template-columns: 1fr 1fr 1fr; */
}

.product__cards .card{
  @apply bg-white rounded-lg shadow-md p-6 w-max max-w-[300px] md:max-w-[400px];
}

.product__cards img {
  @apply mb-4 rounded !w-[140px];
}

.product__cards h3 {
  @apply text-[#faca42] font-medium  text-lg;
}

.product__cards p {
  @apply text-gray-700 mt-2;
}
</style>
