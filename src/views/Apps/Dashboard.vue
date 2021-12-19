<template>
  <v-container>
    <div class="my-8 mx-2 title-text">Dashboard</div>
    <!-- Info Statistic I -->
    <v-row>
      <v-col cols="12" sm="6" md="3" v-for="info in infos" :key="info.title">
        <v-card class="ma-2">
          <v-row class="px-9 text-center">
            <v-col cols="12">
              <div
                class="text-center pt-6 card-text"
                :style="{ color: info.color }"
              >
                {{ info.title }}
              </div>
            </v-col>
            <v-col cols="12">
              <div class="content-text">
                <v-icon x-large :color="info.color">{{ info.icon }}</v-icon>
              </div>
            </v-col>
            <v-col cols="12">
              <div class="content-text pb-6" :style="{ color: info.color }">
                {{ info.number }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    infos: [
      {
        title: "Users",
        icon: "mdi-account",
        number: "20",
        color: "#3182ce",
      },
      {
        title: "Cabang",
        icon: "mdi-source-branch",
        number: "8",
        color: "#C76049",
      },
      {
        title: "Transaksi",
        icon: "mdi-cash-register",
        number: "213",
        color: "#49C77B",
      },
      {
        title: "Product",
        icon: "mdi-warehouse",
        number: "1000",
        color: "#8049C7",
      },
    ],
  }),
};
</script>

<style scoped>
.title-text {
  color: #71C9CE;
  font-weight: bold;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
}

.card-text {
  font-weight: bold;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
}

.content-text {
  font-weight: bold;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
}
</style>

