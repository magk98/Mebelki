<template>
  <div class="flex w-full items-center justify-center">
    <h1 class="text-3xl font-bold">
      {{ $route.params.name }}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
}
</script>
