<template>
  <div class="flex flex-col space-y-8">
    <div class="flex py-6">
      <div class="flex w-1/2 items-center justify-center">
        <div class="w-96 h-128">
          <img class="object-contain" :src="`/img/chair-${selectedColor}.webp`" />
        </div>
      </div>
      <div class="bg-gray-200 flex flex-col w-1/2 items-center space-y-4 rounded-l-3xl justify-around">
        <div>
          <a-header>
            {{ $route.params.name }}
          </a-header>
          <div class="text-3xl font-lato font-light italic">
            123.22 zł
          </div>
        </div>
        <color-picker :colorNames="['gray', 'yellow', 'red', 'blue', 'green']" @colorChosen="handleColorChosen" />
        <div>
          <button class="py-2 px-4 bg-vue-green text-white font-bold text-2xl rounded-lg">Do Koszyka</button>
        </div>
      </div>
    </div>
    <div class="py-6 flex flex-col items-center space-y-8">
      <div class="space-y-2">
        <fullscreen v-model="fullscreen">
          <x3d ref="x3d" :class="`rounded-lg border border-solid border-black bg-white ${x3dClass}`">
            <scene>
              <transform DEF="product-preview-transform">
                <Inline nameSpaceName="item" mapDEFToID="true" onclick='changeColor();' :url="`../models/${name}.x3d`"></Inline>
              </transform>
            </scene>
          </x3d>
        </fullscreen>
        <button class="p-2 bg-vue-green text-white font-bold rounded-lg" @click="toggleFullscreen">Fullscreen</button>
      </div>
      <div class="space-y-4">
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
      </div>
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
      selectedColor: 'gray',
      name: this.$route.params.name,
      fullscreen: false,
    }
  },
  mounted() {
    const x3dScript = document.createElement('script');
    x3dScript.setAttribute('src', 'https://www.x3dom.org/download/x3dom.js');
    document.head.appendChild(x3dScript);
  },
  computed: {
    x3dClass() {
      return this.fullscreen ? 'h-full w-full' : 'h-96 w-96';
    }
  },
  methods: {
    handleColorChosen(newColor) {
      this.selectedColor = newColor;
      const models = document.getElementsByTagName('ImageTexture');
      for (let i = 0; i < models.length; i++) {
        if (models[i].id === 'item__texture') {
          models[i].setAttribute('url', `../models/textures/${newColor}.JPG`);
        }
      }
    },
    toggleFullscreen() {
      this.fullscreen = !this.fullscreen;
    }
  }
}
</script>
