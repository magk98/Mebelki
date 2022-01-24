<template>
  <div class="flex flex-col space-y-8">
    <div class="flex py-6">
      <div class="flex w-1/2 items-center justify-center">
        <div class="w-96 h-128">
          <img class="object-contain" :src="`/img/chair-${selectedColor}.webp`" />
        </div>
      </div>
      <div class="bg-gray-200 flex flex-col w-1/2 items-center space-y-4">
        <a-header>
          {{ $route.params.name }}
        </a-header>
        <div class="text-3xl font-lato font-light italic">
          123.22 zł
        </div>
        <color-picker :colorNames="['red', 'blue', 'green', 'gray']" @colorChosen="handleColorChosen" />
      </div>
    </div>
    <div class="py-6 flex flex-col items-center space-y-2">
      <a-header>
        Opis
      </a-header>
      <p class="text-justify px-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante dolor, suscipit ac gravida at, commodo
        ut lectus. Nulla porttitor risus et porttitor tempus. Morbi elementum, arcu vel gravida faucibus, mi diam
        bibendum felis, id viverra tellus tortor eu dui. Integer scelerisque tellus sed ipsum ultricies gravida. Duis
        sagittis feugiat consectetur. Vestibulum eu elit sit amet lorem fermentum commodo. Praesent gravida efficitur
        condimentum. Etiam commodo libero et aliquam tempus.
      </p>
      <p class="text-justify px-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante dolor, suscipit ac gravida at, commodo
        ut lectus. Nulla porttitor risus et porttitor tempus. Morbi elementum, arcu vel gravida faucibus, mi diam
        bibendum felis, id viverra tellus tortor eu dui. Integer scelerisque tellus sed ipsum ultricies gravida. Duis
        sagittis feugiat consectetur. Vestibulum eu elit sit amet lorem fermentum commodo. Praesent gravida efficitur
        condimentum. Etiam commodo libero et aliquam tempus.
      </p>
      <p class="text-justify px-48">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ante dolor, suscipit ac gravida at, commodo
        ut lectus. Nulla porttitor risus et porttitor tempus. Morbi elementum, arcu vel gravida faucibus, mi diam
        bibendum felis, id viverra tellus tortor eu dui. Integer scelerisque tellus sed ipsum ultricies gravida. Duis
        sagittis feugiat consectetur. Vestibulum eu elit sit amet lorem fermentum commodo. Praesent gravida efficitur
        condimentum. Etiam commodo libero et aliquam tempus.
      </p>
      <x3d ref="x3d" class="w-96 h-96 border-2 border-solid border-black">
        <scene>
          <transform DEF="product-preview-transform">
            <Inline nameSpaceName="item" mapDEFToID="true" onclick='changeColor();' :url="`../models/Sofa.x3d`"></Inline>
          </transform>
        </scene>
      </x3d>
    </div>
  </div>

</template>

<style>
</style>

<script>
import AHeader from '../components/atoms/AHeader.vue';
import ColorPicker from '../components/molecules/ColorPicker.vue';

export default {
  components: { AHeader, ColorPicker },
  name: 'Product',
  data() {
    return {
      selectedColor: 'red',
    }
  },
  methods: {
    // changeColor(element, color) {
    //   // const elementId = element + '__MA_Body'; //dla fotela
    //   // const elementId = element + '__MA_lambert2'; //dla krzesla
    //   //
    //   // document.getElementById(elementId).setAttribute('diffuseColor', color);
    //   const el = document.getElementById("color");
    //   el.setAttribute('diffuseColor', color);
    // },
    handleColorChosen(newColor) {
      this.selectedColor = newColor;
      console.log(this.$refs);
      this.$refs.color.setAttribute('diffuseColor', this.mapColorNameToRGB(newColor));
    },
    mapColorNameToRGB(colorName) {
      switch (colorName) {
        case 'red':
          return '0.3 0 0';
        case 'green':
          return '0 0.3 0';
        case 'blue':
          return '0 0 0.3';
        case 'gray':
          return '0.3 0.3 0.3';
        default:
          return '0 0 0';
      }
    },
    toggleFullscreen() {
        const el = this.$refs.x3d;
        el.style.width = '100%';
        el.style.height = '100%';
    }
  }
}
</script>
