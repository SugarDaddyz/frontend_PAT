<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <div class="my-8 title-text">Management Users</div>
      </v-col>
      <v-col cols="6">
        <div class="float-right my-8 title-text">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="float-right" icon v-bind="attrs" v-on="on" dark>
                <v-avatar color="#71C9CE" circle size="50">
                  <v-icon>mdi-plus</v-icon>
                </v-avatar>
              </v-btn>
            </template>
            <span>Add Users</span>
          </v-tooltip>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <!-- Users -->
      <v-col cols="12">
        <div>
          <v-data-table
            :headers="headers"
            :items="datas"
            :page.sync="page"
            :items-per-page="itemsPerPage"
            hide-default-footer
            class="elevation-1"
            @page-count="pageCount = $event"
          >
            <template v-slot:item.role="{ item }">
              <v-chip multiple color="#71c9ce" text-color="white" class="mx-1">
                {{ item.role }}
              </v-chip>
            </template>
            <template v-slot:item.action="{ item }">
              <v-btn icon color="#71c9ce" dark>
                <v-icon>{{ item.action }}</v-icon>
              </v-btn>
            </template>
          </v-data-table>
          <div class="text-center pt-2">
            <v-pagination
              circle
              v-model="page"
              :length="pageCount"
              color="#71c9ce"
            ></v-pagination>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Email", value: "email" },
        { text: "Role", value: "role" },
        { text: "Action", value: "action" },
      ],
      datas: [
        {
          name: "Ari Sandy",
          email: "arisandy@upi..edu",
          role: "Pimpinan Cabang",
          action: "mdi-circle-edit-outline",
        },
        {
          name: "Faris Huwaidi",
          email: "farishuwaidi@upi..edu",
          role: "Admin",
          action: "mdi-circle-edit-outline",
        },
      ],
    };
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
</style>
