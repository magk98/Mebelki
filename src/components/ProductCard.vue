<template>
  <router-link :to="`/product/${name}`">
    <div class="rounded-lg drop-shadow-md p-4 m-4 bg-gray-100 border transition-all border-solid border-vue-green hover:border-4 flex flex-col items-center">
      <x3d showLog="true" class="w-72 h-80 border border-solid border-vue-green rounded-xl">
        <scene>
          <transform DEF="product-preview-transform">
            <shape>
              <appearance>
                  <material diffuseColor='0.3 0 0'></material>
              </appearance>
              <box></box>
            </shape>
          </transform>
          <timeSensor DEF="time" cycleInterval="2" loop="true"> </timeSensor>
          <orientationInterpolator DEF='spin' key='0 0.25 0.5 0.75 1' keyValue='0 1 0 0  0 1 0 1.57079  0 1 0 3.14159  0 1 0 4.71239  0 1 0 6.28317'></orientationInterpolator> 
          <route fromNode="time" fromField="fraction_changed" toNode="spin" toField="set_fraction"></route> 
          <route fromNode="spin" fromField="value_changed" toNode="product-preview-transform" toField="set_rotation"> </route>
        </scene>
      </x3d>
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
