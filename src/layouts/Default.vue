<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<template>
  <div class="layout">
    <Header/>

    <slot></slot>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  @apply bg-[#faca42];
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
}
</style>
