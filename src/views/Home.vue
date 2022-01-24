<template>
  <div class="flex px-4">
    <div class="w-1/3">
      <filters />
    </div>
    <div class="flex flex-wrap items-center justify-center">
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
