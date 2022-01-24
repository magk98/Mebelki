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
    <!--      <NavigationInfo id="head" headlight="true" type="EXAMINE"></NavigationInfo>-->
    <!--      &lt;!&ndash;        <Inline nameSpaceName="fotel" mapDEFToID="true" url="models/fotel_blue.x3d"></Inline>&ndash;&gt;-->
    <!--      <Inline nameSpaceName="krzeslo" mapDEFToID="true" url="../../public/models/krzeslo.x3d"></Inline>-->
    <!--      &lt;!&ndash;        <Inline nameSpaceName="Deer" mapDEFToID="true" onclick='redNose();' url="Deer.x3d"></Inline>&ndash;&gt;-->
          <shape>
            <appearance>
                <material ref="color" diffuseColor='0.3 0 0'></material>
            </appearance>
            <box></box>
          </shape>
        </scene>
      </x3d>
    </div>
  </div>
  <!-- <div class="circle red" @click="changeColor('krzeslo','0.3 0 0')"></div>
  <div class="circle blue" @click="changeColor('krzeslo','0 0 0.5')"></div>
  <div class="circle green" @click="changeColor('krzeslo','0 0.6 0')"></div>
  <div class="circle brown" @click="changeColor('krzeslo','0.3 0.3 0')"></div>
  <div class="circle black" @click="changeColor('krzeslo','0 0 0')"></div> -->

</template>

<style>
  /* x3d {
    border: 2px solid black;
    background: rgba(255, 255, 255, 1);
      margin-left: 450px;
  }

  body {
    font-size: 110%;
    font-family: verdana, sans-serif;
    margin: 3em;
    color: lightgray;
  }

  .circle {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin: 8px;
    display: inline-flex;
  }

  .red {
    background-color: #840f0f;
  }

  .brown {
    background-color: #5f5818;
  }

  .black {
      background-color: black;
  }

  .blue {
    background-color: blue;
  }

  .green {
    background-color: green;
  } */
</style>

<script>
import AHeader from '../components/atoms/AHeader.vue';
import ColorPicker from '../components/molecules/ColorPicker.vue';

export default {
  components: { AHeader, ColorPicker },
  name: 'Product',
  data() {
    return {
      selectedColor: 'red'
    }
  },
  mounted() {
    const x3dScript = document.createElement('script');
    x3dScript.setAttribute('src', 'https://www.x3dom.org/download/x3dom.js');
    document.head.appendChild(x3dScript);
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
