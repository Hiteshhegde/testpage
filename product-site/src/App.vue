<template>
  <div id="app">
    <app-header :title="title" :date="date" v-on:changetitle="updatetitle($event)"></app-header>
    <app-main :title="title"></app-main>
    <!-- <app-blogs></app-blogs>-->
    <app-footer :title="title" :date="date"></app-footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import blogs from "./components/blogs.vue";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-main": Main,
    "app-blogs": blogs
  },
  data() {
    return {
      title: "Jobs ",
      date: "Since 2004"
    };
  },
  methods: {
    updatetitle(updatedtitle) {
      this.title = updatedtitle;
    }
  }
};
</script>

<style scoped>
</style> 