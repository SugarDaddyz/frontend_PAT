<template>
  <div>
    <v-app-bar color="white" flat app>
      <v-row class="ma-4">
        <v-col cols="12">
          <v-btn class="float-left" icon @click="drawer = !drawer" dark>
            <v-avatar color="#71C9CE" rounded size="50"
              ><v-icon>mdi-menu</v-icon></v-avatar
            >
          </v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>

      <!-- Profile menu -->
      <v-row>
        <v-col cols="6" sm="2" md="9">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="float-right"
                @click="dialog = true"
                icon
                v-bind="attrs"
                v-on="on"
                dark
              >
                <v-avatar color="#71C9CE" rounded size="50"> US </v-avatar>
              </v-btn>
            </template>
            <span>Profile</span>
          </v-tooltip>
        </v-col>
        <v-col cols="6" sm="2" md="2">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="float-right"
                icon
                to="Login"
                v-bind="attrs"
                v-on="on"
                dark
              >
                <v-avatar color="#71C9CE" rounded size="50">
                  <v-icon>mdi-logout</v-icon>
                </v-avatar>
              </v-btn>
            </template>
            <span>logout</span>
          </v-tooltip>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- Navigation Drawer -->
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
        to: "Users",
      },
      {
        icon: "mdi-source-branch",
        title: "Cabang",
        tooltip: "Cabang",
        to: "Cabang",
      },
      // {
      //   icon: "mdi-cash-register",
      //   title: "Transaksi",
      //   tooltip: "Transaksi",
      //   to: "Transaksi",
      // },
      {
        icon: "mdi-warehouse",
        title: "Product",
        tooltip: "Product",
        to: "Products",
      },
    ],
    // mini: true,
    drawer: true,
  }),
};
</script>
