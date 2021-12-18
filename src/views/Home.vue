<template>
  <v-container>
    <div class="my-8 title-text">Home</div>
    <v-row>
      <!-- Users -->
      <v-col cols="12">
        <v-card>
          <v-row class="px-9">
            <v-col cols="12">
              <div class="pt-6 card-text">
                Selamat datang "User" di sistem Aplikasi Sugar Daddy
              </div>
            </v-col>
            <v-col cols="12">
              <div class="content-text">
                Sugar Daddy adalah sistem untuk manajemen barang yang ada pada
                gudang pusat dan gudang cabang.Sistem ini hanya dapat di akses
                oleh pihak yang berwenang yaitu manajer pusat dan para admin di
                setiap cabang.
              </div>

              <div class="content-text">
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

<style scoped>
.title-text {
  color: #3182ce;
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
