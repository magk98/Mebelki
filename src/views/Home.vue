<template>
  <div class="flex">
    <div class="w-2/6 pt-4">
      <filters />
    </div>
    <div class="w-1/12 bg-gradient-to-r from-white to-gray-100"></div>
    <div class="flex flex-wrap items-center justify-center bg-gray-100">
      <product-card name="Krzesło" />
      <product-card name="Sofa" />
      <product-card name="Stół" />
      <product-card name="Kanapa" />
      <product-card name="Biurko" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import Filters from '../components/Filters.vue'

// @ is an alias to /src
export default {
  components: { ProductCard, Filters },
  name: 'Home',
  mounted() {
    const x3dScript = document.createElement('script');
    x3dScript.setAttribute('src', 'https://www.x3dom.org/download/x3dom.js');
    document.head.appendChild(x3dScript);
  },
}
</script>
