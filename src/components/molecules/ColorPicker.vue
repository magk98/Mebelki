<template>
  <div class="flex flex-wrap justify-center">
    <div v-for="colorName in colorNames" :key="colorName" class="p-2">
      <a-color-field :colorName="colorName" :active="colorName === selectedColor" @colorChosen="handleColorChosen" />
    </div>
  </div>
</template>

<script>
import AColorField from '../atoms/AColorField.vue'
export default {
  components: { AColorField },
  name: 'ColorPicker',
  props: {
    colorNames: Array
  },
  data() {
    return {
      selectedColor: this.colorNames[0]
    }
  },
  methods: {
    handleColorChosen(newColor) {
      if (newColor === this.selectedColor) return;

      this.selectedColor = newColor;
      this.$emit('colorChosen', newColor);
    }
  }
}
</script>
