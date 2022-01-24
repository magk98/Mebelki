<template>
  <div :class="`${sizeClass} font-lato font-thin`">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AHeader',
  props: {
    small: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClass() {
      return this.small ? 'text-3xl' : 'text-5xl'
    }
  }
}
</script>
