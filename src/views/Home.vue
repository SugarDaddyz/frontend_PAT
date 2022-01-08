<template>
  <v-container>
    <div class="my-8 title-text">Home</div>
    <v-row>
      <!-- Users -->
      <v-col cols="12">
        <v-card>
          <v-row class="px-9">
            <v-col cols="12">
              <div class="pt-4 card-text">
                Selamat datang {{ auth.auth.data.username }} di sistem Aplikasi
                Sugar Daddy
              </div>
            </v-col>
            <v-col cols="12">
              <div class="content-text py-2">
                Sugar Daddy adalah sistem untuk manajemen barang yang ada pada
                gudang pusat dan gudang cabang.Sistem ini hanya dapat di akses
                oleh pihak yang berwenang yaitu manajer pusat dan para admin di
                setiap cabang.
              </div>

              <div class="content-text py-4">
                Sugar Daddy memiliki fitur untuk manajement user, percabangan
                gudang, transaksi, dan manajement barang.
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueRouter from "vue-router";
import { mapGetters, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState({
      auth: (state) => state.auth,
    }),
  },
};
</script>

<style scoped>
.title-text {
  color: #71c9ce;
  font-weight: bold;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
}

.card-text {
  font-weight: bold;
  font-size: 25px;
  font-family: "Nunito", sans-serif;
}

.content-text {
  font-weight: medium;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
}
</style>
