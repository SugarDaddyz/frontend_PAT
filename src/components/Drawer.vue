<template>
  <div>
    <!-- <v-app-bar color="#71C9CE" dense app dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar> -->
    <v-navigation-drawer v-model="drawer" app dark color="#71C9CE" mini-variant>
      <v-list>
        <v-list-item
          v-for="menu in menus"
          :key="menu.tooltip"
          link
          :to="{ name: menu.to }"
        >
          <!-- Menu Navigation -->
          <v-list-item-icon>
            <v-tooltip right>
              <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on">{{ menu.icon }}</v-icon>
              </template>
              <span>{{ menu.tooltip }}</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    menus: [
      { icon: "mdi-home", title: "Home", tooltip: "Home", to: "Home" },
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        tooltip: "Dashboard",
        to: "Dashboard",
      },
      {
        icon: "mdi-account",
        title: "User Management",
        tooltip: "User Management",
      },
      { icon: "mdi-source-branch", title: "Cabang", tooltip: "Cabang" },
      {
        icon: "mdi-cash-register",
        title: "Transaksi",
        tooltip: "Transaksi",
        to: "",
      },
      { icon: "mdi-cart", title: "Product", tooltip: "Product" },
    ],
    // mini: true,
   drawer: true,
  }),
};
</script>
