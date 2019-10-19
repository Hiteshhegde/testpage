<template>
  <div>
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yeseva+One" />
    <footer>
      <p>{{ title }}</p>
    </footer>
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
      copyright: "© Copyright "
    };
  },
  created() {
    bus.$on("datechanged", data => {
      this.date = data;
    });
  }
};
</script>

<style scoped>
footer {
  background: rgb(254, 254, 255);
  padding: 5px;
}
p {
  color: rgb(0, 0, 0);
  text-align: center;
  font-family: Yeseva One;
  font-size: 17px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 24.2833px;
}
</style>