<!-- ./src/components/Header.vue -->
<page-query>
{
  product(id: "emmas-coffee") {
    seo {
      title
      description
    }
  }
}
</page-query>
<script>
export default {
  name: "Header",
};
</script>
<template>
  <header class="site-header">
    <div class="wrapper">
      <g-link to="/">
          <p class="site-header__title">
            {{ 
              $page.product.seo.title  
            }}
          </p>
      </g-link>
      <nav class="site-nav">
        <div class="site-nav__cont">
          <p class="site-nav__slug">
           {{ 
              $page.product.seo.description
            }}
          </p>
          <li class="site-nav__cta">
            <g-link class="cta">
              Find us
            </g-link>
          </li>
        </div>
      </nav>
    </div>
  </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;1,300&family=Righteous&display=swap');
.site-header {
  @apply sticky top-0 w-full p-4 z-10 rounded-md;
}
.site-header > .wrapper {
  @apply flex justify-between items-center py-4 px-2 gap-4 w-4/5 max-w-7xl mx-auto backdrop-blur-2xl rounded-md;
}
.site-header__title{
  @apply text-2xl font-bold text-gray-800;
  /* font-family: 'Chakra Petch', sans-serif; */
  font-family: 'Righteous', cursive;
}
.site-nav__cont {
  @apply flex items-center gap-12;
}
.site-nav__slug {
  @apply hidden md:inline-block text-sm font-medium;
  font-family: 'Chakra Petch', sans-serif;
}

.site-nav__cta {
  @apply ml-auto list-none;
  font-family: 'Chakra Petch', sans-serif;
}

.cta{
  @apply inline-block text-sm rounded-xl bg-slate-100 py-2 px-6;
}
</style>
