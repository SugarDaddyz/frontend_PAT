<template>
  <v-container>
    <v-content>
      <v-row>
        <v-col cols="6">
          <div class="my-8 title-text">Management Users</div>
        </v-col>
        <v-col cols="6">
          <div class="float-right my-8 title-text">
            <v-dialog v-model="dialog" max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="float-right" icon v-bind="attrs" v-on="on" dark>
                  <v-avatar color="#71C9CE" circle size="50">
                    <v-icon>mdi-plus</v-icon>
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="title-dialog ml-3">Add User</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <!-- Fullname Form -->
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          id="terms"
                          outline
                          v-model="editedDatas.fullName"
                          label="Full Name"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <!-- Username Form -->
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          id="terms"
                          v-model="editedDatas.username"
                          label="Username"
                          outlined
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-select
                          id="terms"
                          v-model="editedDatas.role"
                          :items="roles"
                          label="Role"
                          outlined
                        ></v-select>
                      </v-col>

                      <v-col cols="12" sm="12" md="12">
                        <v-select
                          id="terms"
                          v-model="editedDatas.status"
                          :items="status"
                          label="Status"
                          outlined
                        ></v-select>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#71c9ce" text @click="close"> Cancel </v-btn>
                  <v-btn color="#71c9ce" text @click="save"> Save </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <!--  -->
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5"
                  >Are you sure you want to delete this item?</v-card-title
                >
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#71c9ce" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="#71c9ce" text @click="deleteItemConfirm"
                    >Delete</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!--  -->
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
              <template v-slot:[`item.role`]="{ item }">
                <v-chip
                  multiple
                  color="#71c9ce"
                  text-color="white"
                  class="mx-1"
                >
                  {{ item.role }}
                </v-chip>
              </template>
              <template v-slot:[`item.action`]="{ item }">
                <v-row>
                  <!-- Edit Action -->
                  <v-btn icon @click="editItem(item)" color="#71c9ce" dark>
                    <v-icon>mdi-account-edit</v-icon>
                  </v-btn>
                  <!-- Delete Action -->
                  <v-btn icon color="#71c9ce" dark>
                    <v-icon @click="deleteItem(item)">mdi-trash-can</v-icon>
                  </v-btn>
                </v-row>
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
    </v-content>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      terms: false,
      dialog: false,
      dialogDelete: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      // array Role
      roles: [1, 2, 3],
      status: ["ACTIVE", "INACTIVE", "BLOCKED"],
      // Form
      headers: [
        {
          text: "Name",
          align: "start",
          value: "fullName",
        },
        { text: "Username", value: "username" },
        { text: "Role", value: "role" },
        { text: "Status", value: "status" },
        { text: "Action", value: "action", sortable: false },
      ],
      datas: [],
      editedIndex: -1,
      editedDatas: {
        name: "",
        email: "",
        role: "",
        status: "",
      },
      defaultDatas: {
        name: "",
        email: "",
        role: "",
        status: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New User" : "Edit User";
    },
    isDisabled: function () {
      return !this.terms;
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.datas = [];
    },

    editItem(item) {
      this.editedIndex = this.datas.indexOf(item);
      this.editedDatas = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.datas.indexOf(item);
      this.editeddatas = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.datas.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedDatas = Object.assign({}, this.defaultDatas);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.datas[this.editedIndex], this.editedDatas);
      } else {
        this.datas.push(this.editedDatas);
      }
      this.close();
    },
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

.title-dialog {
  color: #71c9ce;
  font-weight: bold;
  font-size: 20px;
  font-family: "Nunito", sans-serif;
}
</style>
