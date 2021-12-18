<template>
  <v-content>
    <v-form>
      <v-row>
        <!-- Left Side -->
        <v-col class="bg-login-logo" cols="7" sm="7" v-if="isMobile()">
          <v-row class="img-login ma-12 pa-12">
            <v-col cols="12">
              <div class="action">
                <v-img
                  contain
                  src="../../assets/login-img.svg"
                  height="100%"
                  width="100%"
                />
              </div>
            </v-col>
          </v-row>
        </v-col>

        <!-- Right Side -->
        <v-col cols="12" sm="12" md="5">
          <v-row class="form-login">
            <v-col class="my-8 py-8" cols="12">
              <!-- Header Form -->
              <div class="action">
                <v-img
                  contain
                  src="../../assets/logo-form.svg"
                  height="57px"
                  width="100%"
                />
              </div>
              <!-- title form -->
              <div class="text-center my-8 login-text">Login your account</div>

              <!-- Form Login -->
              <div class="action">
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <div class="email-title mb-1">
                      <v-icon medium color="#2a4365" class="mr-2 mx-8">
                        mdi-email </v-icon
                      >Email Address
                    </div>
                    <v-text-field
                      class="mx-8"
                      color="#2a4365"
                      type="email"
                      v-model="email"
                      placeholder="Type your email address"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <div class="email-title mb-1">
                      <v-icon medium color="#2a4365" class="mr-2 mx-8">
                        mdi-lock </v-icon
                      >Password
                    </div>
                    <v-text-field
                      id="password"
                      class="mx-8"
                      color="#2a4365"
                      type="password"
                      v-model="password"
                      placeholder="Type your password"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </div>
              <!-- Forgot password? -->
              <div class="forget-action forget-text mr-8">
                <a href="">Forgot password?</a>
              </div>

              <!-- Sign in Button -->
              <div class="action text-center">
                <v-row>
                  <v-col cols="12" class="mt-8">
                    <v-btn
                      class="submit mt-8"
                      height="50px"
                      width="90%"
                      rounded
                      color="#71C9CE"
                      dark
                      @click="login"
                    >
                      Login
                    </v-btn>
                    <v-overlay :value="loading">
                      <v-progress-circular
                        indeterminate
                        size="64"
                      ></v-progress-circular>
                    </v-overlay>
                  </v-col>
                </v-row>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
  </v-content>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: "",
    password: "",
    loading: false,
  }),
  methods: {
    isMobile() {
      if (screen.width <= 800) {
        return false;
      } else if (screen.width <= 3000) {
        return true;
      } else {
        return true;
      }
    },
    login() {
      this.loading = true;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.bg-login-logo {
  background-color: #a6e3e9;
}

.action {
  align-items: center;
  justify-content: center;
}

.login-text {
  color: #71c9ce;
  font-weight: bold;
  font-size: 36px;
  font-family: "Nunito", sans-serif;
}

.email-title {
  color: #2a4365;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
}

.forget-text {
  color: #3182ce;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
}

.forget-action {
  display: flex;
  align-items: Right;
  justify-content: Right;
}

.signup-text {
  color: #2a4365;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
}
</style>