<template>
  <router-link :to="`/product/${name}`">
    <div class="rounded-lg drop-shadow-md py-4 bg-gray-100 border transition-all border-solid border-vue-green hover:border-4">
        {{ name }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    name: String
  }
}
</script>
