<template>
  <div>
    <div id="nav">
      <Drawer/>
      <!-- <router-link :to="{ name: 'Landing' }">Home</router-link> |
      <router-link :to="{ name: 'Admin' }">Dashboard</router-link> |
      <router-link :to="{ name: 'News' }">News</router-link> -->
    </div>
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
import Drawer from "../components/Drawer.vue"
export default {
  components: {
    Drawer,
  },
};
</script>