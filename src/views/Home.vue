<template>
  <div class="flex px-4">
    <div class="w-1/3">
      <filters />
    </div>
    <div class="w-2/3 grid grid-cols-3 gap-4">
      <product-card name="Krzesło" />
      <product-card name="Sofa" />
      <product-card name="Stół" />
      <product-card name="Wanna" />
      <product-card name="Lampa" />
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
}
</script>
