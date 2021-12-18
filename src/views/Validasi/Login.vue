<template>
  <v-content>
    <v-row>
      <!-- Left Side -->
      <v-col class="bg-login-logo" cols="7">
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
      <v-col cols="5">
        <v-row class="form-login">
          <v-col class="my-8 py-8" cols="12">
            <!-- Header Form -->
            <div class="action">
              <v-img
                contain
                src="../../assets/logo-form.svg"
                height="57px"
                width="232px"
              />
            </div>
            <!-- title form -->
            <div class="text-center my-8 login-text">Login your account</div>

            <!-- Form Login -->
            <div class="action">
              <v-form>
                <v-row>
                  <v-col cols="12" sm="6" md="12">
                    <div class="email-title mb-1">
                      <v-icon medium color="#2a4365" class="mr-2">
                        mdi-email </v-icon
                      >Email Address
                    </div>
                    <v-text-field
                      placeholder="Type your email address"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="12">
                    <div class="email-title mb-1">
                      <v-icon medium color="#2a4365" class="mr-2">
                        mdi-lock </v-icon
                      >Password
                    </div>
                    <v-text-field
                      placeholder="Type your password"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-form>
            </div>
            <!-- Forgot password? -->
            <div class="forget-action forget-text mr-12 pr-11">
              <a href="">Forgot password?</a>
            </div>

            <!-- Sign in Button -->
            <div class="action text-center">
              <v-row>
                <v-col cols="12">
                  <v-btn
                    class="submit my-6"
                    height="50px"
                    width="70%"
                    rounded
                    color="#71C9CE"
                    dark
                  >
                    Sign in
                  </v-btn>
                </v-col>
              </v-row>
            </div>

            <!-- bottom form-->
            <div class="action signup-text my-2">
              Don’t you have account? <a href=""> Sign Up</a>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-content>
</template>

<style scoped>
.bg-login-logo {
  background-color: #a6e3e9;
}

.action {
  display: flex;
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
  color: #2A4365;;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
}
</style>