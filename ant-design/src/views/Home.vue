<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Nav msg="i am wocao"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Nav from '@/components/Nav.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    Nav,

  },
})
export default class Home extends Vue {}
</script>
