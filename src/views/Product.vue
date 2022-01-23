<template>
  <div class="flex w-full items-center justify-center">
    <h1 class="text-3xl font-bold">
      {{ $route.params.name }}
    </h1>
  </div>
  <div class="circle red" @click="changeColor('krzeslo','0.3 0 0')"></div>
  <div class="circle blue" @click="changeColor('krzeslo','0 0 0.5')"></div>
  <div class="circle green" @click="changeColor('krzeslo','0 0.6 0')"></div>
  <div class="circle brown" @click="changeColor('krzeslo','0.3 0.3 0')"></div>
  <div class="circle black" @click="changeColor('krzeslo','0 0 0')"></div>

  <x3d width='500px' height='400px' id="x3d">
    <scene>
<!--      <NavigationInfo id="head" headlight="true" type="EXAMINE"></NavigationInfo>-->
<!--      &lt;!&ndash;        <Inline nameSpaceName="fotel" mapDEFToID="true" url="models/fotel_blue.x3d"></Inline>&ndash;&gt;-->
<!--      <Inline nameSpaceName="krzeslo" mapDEFToID="true" url="../../public/models/krzeslo.x3d"></Inline>-->
<!--      &lt;!&ndash;        <Inline nameSpaceName="Deer" mapDEFToID="true" onclick='redNose();' url="Deer.x3d"></Inline>&ndash;&gt;-->
      <shape>
        <appearance>
            <material id ="color" diffuseColor='0.3 0 0'></material>
        </appearance>
        <box></box>
      </shape>
    </scene>
  </x3d>
</template>
<style>
  x3d {
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
  }


</style>

<script>
export default {
  name: 'Product',
  methods: {
    changeColor(element, color) {
      // const elementId = element + '__MA_Body'; //dla fotela
      // const elementId = element + '__MA_lambert2'; //dla krzesla
      //
      // document.getElementById(elementId).setAttribute('diffuseColor', color);
      const el = document.getElementById("color");
      el.setAttribute('diffuseColor', color);
    },
      toggleFullscreen() {
          const el = document.getElementById("x3d");
            el.style.width = '100%';
            el.style.height = '100%';
      }
  }
}

</script>
