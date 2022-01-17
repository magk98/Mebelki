<template>
  <div class="grid grid-cols-3 gap-4">
    <product-card name="Krzesło" />
    <product-card name="Sofa" />
    <product-card name="Stół" />
    <product-card name="Wanna" />
    <product-card name="Lampa" />
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'

// @ is an alias to /src
export default {
  components: { ProductCard },
  name: 'Home',
}
</script>
