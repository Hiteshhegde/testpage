<template>
  <div id="main-page">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Merienda+One" />
    <div>
      <b-card
        overlay
        img-src="./neverhunt.jpg"
        img-alt="Card Image"
        text-variant="white"
        title="Welcome to Neverhunt "
        sub-title="Here, the job finds you!!"
        img-height="400"
      >
        <b-card-text>The process takes three steps:</b-card-text>
        <b-card-text>Create your account, Upload your resume and Provide your skill set</b-card-text>
        <b-button pill variant="light" @click="page = 'main-login'">Login</b-button>&nbsp; or &nbsp;
        <b-button pill variant="danger" @click="page = 'main-signup'">Sign up</b-button>
      </b-card>
    </div>

    <hr />

    <keep-alive>
      <b-card border-variant="success" bg-variant="info">
        <b-card-body>
          <div>
            <component :is="page"></component>
          </div>
        </b-card-body>
      </b-card>
    </keep-alive>

    <hr />

    <b-card-group deck>
      <b-card
        title="Jobs in Pyhton devloping"
        img-src="./python-image.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Click to learn more about this..</b-card-text>

        <b-button href="#" variant="primary">More</b-button>
      </b-card>
      <b-card
        title="Jobs in Data Science"
        img-src="./data-science.jpeg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Click to learn more about this..</b-card-text>

        <b-button href="#" variant="primary">More</b-button>
      </b-card>
      <b-card
        title="Jobs in Web Development"
        img-src="./web-development.jpg"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text>Click to learn more about this..</b-card-text>

        <b-button href="#" variant="primary">More</b-button>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

export default {
  name: "main-page",
  components: {
    "main-login": Login,
    "main-signup": Signup
  },

  data() {
    return {
      page: ""
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>