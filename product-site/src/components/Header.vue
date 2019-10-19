<template>
  <div>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Rock+Salt" />
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Artifika" />
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand tag="h1" class="mb-0" v-on:click="changetitle">{{ title }}</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav type="dark">
          <b-nav-text class="navdes">{{description}}</b-nav-text>&nbsp;
          <b-nav-item href="#">About</b-nav-item>
          <b-nav-item href="#">Contact Us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model.lazy:type="text"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>&nbsp;
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  props: {
    title: {
      type: String
    },
    date: {
      type: String
    }
  },
  data() {
    return {
      description: "Searching jobs made easier",
      text: ""
    };
  },
  methods: {
    changetitle() {
      this.$emit("changetitle", "Neverhunt");
    },
    changedate() {
      this.date = "Estd 2004";
      bus.$emit("datechanged", "Estd 2004");
    }
  }
};
</script>

<style scoped>
h1 {
  color: #222;
  text-align: center;
  font-family: Rock Salt;
  font-size: 25px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
}
navdes {
  font-family: Merienda One;
  font-size: 14px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 23px;
}
h5 {
  color: #222;
  text-align: center;
  font-family: Calligraffitti;
  font-size: 20 px;
  font-style: normal;
  font-variant: normal;
  font-weight: 900;
  line-height: 15.4px;
}
</style>