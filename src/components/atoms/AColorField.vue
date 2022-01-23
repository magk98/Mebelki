<template>
  <div :class="`h-16 w-16 rounded-full flex items-center justify-center transition-all ${wrapperActiveClassName}`">
    <div :class="`rounded-full bg-${colorName}-500 transition-all ${activeClassName}`" @click="$emit('colorChosen', colorName)"/>
  </div>
</template>

<script>
export default {
  name: 'AColorField',
  props: {
    colorName: String,
    active: Boolean
  },
  computed: {
    activeClassName() {
      return this.active ? 'h-14 w-14' : 'w-full h-full';
    },
    wrapperActiveClassName() {
      return this.active ? 'border-2 border-vue-green' : '';
    },
  }
}
</script>
