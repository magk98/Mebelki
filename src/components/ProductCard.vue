<template>
  <router-link :to="`/product/${name}`">
    <div class="rounded-lg drop-shadow-md p-4 m-4 shadow-lg border bg-white transition-all border-solid hover:shadow-2xl flex flex-col items-center">
      <x3d class="w-72 h-80 border border-solid border-vue-green rounded-xl">
        <scene>
          <NavigationInfo type="NONE"></NavigationInfo>
          <transform DEF="product-preview-transform">
            <Inline nameSpaceName="item" mapDEFToID="true" onclick='changeColor();' :url="`models/${name}.x3d`"></Inline>
          </transform>
          <timeSensor DEF="time" cycleInterval="6" loop="true"> </timeSensor>
          <orientationInterpolator DEF='spin' Key='0 0.25 0.5 0.75 1' keyValue='0 1 0 0  0 1 0 1.57079  0 1 0 3.14159  0 1 0 4.71239  0 1 0 6.28317'></orientationInterpolator>
          <route fromNode="time" fromField="fraction_changed" toNode="spin" toField="set_fraction"></route> 
          <route fromNode="spin" fromField="value_changed" toNode="product-preview-transform" toField="set_rotation"> </route>
        </scene>
      </x3d>
      <a-header class="mt-4" :small="true">
        {{ name }}
      </a-header>
    </div>
  </router-link>
</template>

<script>
import AHeader from './atoms/AHeader.vue'

export default {
  components: { AHeader },
  name: 'ProductCard',
  props: {
    name: String
  }
}
</script>
