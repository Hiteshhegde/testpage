<template>
  <div>
    <b-container>
      <b-row class="mt-5" align-h="center">
        <b-col cols="5" align-self="center">
          <b-card class="p-3" bg-variant="light" text-variant="black">
            <h3 class="mb-4">Login</h3>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" text-variant="white">
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="Ex: name@somemail.com"
              >
                <b-form-input
                  id="input-1"
                  v-model.lazy="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model.lazy="form.password"
                  type="password"
                  required
                  placeholder="Type your password"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                  <b-form-checkbox value="remember">Remember me</b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              <div class="d-flex justify-content-between">
                <div>
                  <b-button type="submit" @click.prevent="post" variant="primary">Submit</b-button>&nbsp;
                  <b-button type="reset" variant="danger">Reset</b-button>
                </div>
                <div>
                  <a href="#">Forgot Password</a>
                </div>
              </div>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        checked: []
      },
      show: true
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          EMail: this.form.email,
          PAssword: this.form.password
        })
        .then(function(data) {
          console.log(data);
        });
    },
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>