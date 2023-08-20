<page-query>
query {
  product(id: "emmas-coffee") {
    id
    seo {
      title
      description
    }
    body {
      type
      fields {
        caption
        description
        cta_text
        hero_image
        title
        about_image
        product {
          name
          description
          image
        }
        details
      }
    }
  }
}
</page-query>
<script>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Product from "@/components/Products.vue";
import Contact from "@/components/Contact.vue";
export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    Hero,
    About,
    Product,
    Contact,
  },
  created() {
    console.log(this.$page.product);
  },
};
</script>
<template>
  <layout>
    <div v-for="(block, i) in $page.product.body" :key="i">
      <Hero v-if="block.type == 'hero_block'" 
        :caption="block.fields.caption"
        :description="block.fields.description"
        :cta="block.fields.cta_text"
        :image="block.fields.hero_image"
      />
      <About v-else-if="block.type == 'about_block'" 
        :title="block.fields.title"
        :description="block.fields.description"
        :image="block.fields.about_image"
        :caption="block.fields.caption"
      />
      <Product v-else-if="block.type == 'product_block'" 
        :smoothies="block.fields.product"
      />
      <Contact v-else-if="block.type == 'contact_block'" 
        :details="block.fields.details"
        :title="block.fields.title"
        :caption="block.fields.caption"
      />
    </div>
  </layout>
</template>

<style>
/* styles */
.text {
  @apply mt-16 text-4xl z-20;
}
</style>
