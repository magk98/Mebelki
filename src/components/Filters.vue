<template>
  <div class="flex flex-col space-y-8">
    <div>
      <a-header>
        Kolor
        <color-picker class="pt-2" :colorNames="['red', 'green', 'blue']" />
      </a-header>
    </div>
    <div>
      <a-header>
        Cena
      </a-header>
    </div>
  </div>
</template>

<script>
import AHeader from './atoms/AHeader.vue'
import ColorPicker from './molecules/ColorPicker.vue'

export default {
  components: { AHeader, ColorPicker },
  name: 'Filters',
  data() {
    return {
      colors: ['red', 'blue', 'green']
    }
  },
  props: {
    name: String
  }
}
</script>
