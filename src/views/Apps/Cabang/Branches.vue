<template>
  <v-container>
    <v-content>
      <validation-observer ref="observer" v-slot="{ invalid }">
        <v-form @submit.prevent="submit">
          <v-row>
            <v-col cols="6">
              <div class="my-8 title-text">Store List</div>
            </v-col>
            <v-col cols="6">
              <div class="float-right my-8 title-text">
                <v-dialog v-model="dialog" max-width="600px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="float-right"
                      icon
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      <v-avatar color="#71C9CE" circle size="50">
                        <v-icon>mdi-plus</v-icon>
                      </v-avatar>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="title-dialog ml-3">Add Store</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <!-- Store Name Form -->
                          <v-col cols="12" sm="12" md="12">
                            <validation-provider
                              v-slot="{ errors }"
                              name="storeName"
                              rules="required|max:50"
                            >
                              <v-text-field
                                id="terms"
                                v-model="editedDatas.storeName"
                                label="Store Name"
                                :error-messages="errors"
                                :counter="50"
                                outlined
                                required
                              ></v-text-field>
                            </validation-provider>
                          </v-col>
                          <!-- Address Form -->
                          <v-col cols="12" sm="12" md="12">
                            <validation-provider
                              v-slot="{ errors }"
                              name="address"
                              rules="required|max:1000"
                            >
                              <v-textarea
                                id="terms"
                                v-model="editedDatas.address"
                                label="Address"
                                :error-messages="errors"
                                :counter="1000"
                                outlined
                                required
                              ></v-textarea>
                            </validation-provider>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="#71c9ce" text @click="close">
                        Cancel
                      </v-btn>
                      <v-btn
                        color="#71c9ce"
                        text
                        @click="save"
                        :disabled="invalid"
                      >
                        Save
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>

                <!--  -->
                <v-dialog v-model="dialogDelete" max-width="500px">
                  <v-card>
                    <v-card-title class="text-h5"
                      >Are you sure you want to delete this
                      Cabang?</v-card-title
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
                  <template v-slot:item.role="{ item }">
                    <v-chip
                      multiple
                      color="#71c9ce"
                      text-color="white"
                      class="mx-1"
                    >
                      {{ item.role }}
                    </v-chip>
                  </template>
                  <template v-slot:item.action="{ item }">
                    <v-row>
                      <!-- Edit Action -->
                      <v-btn icon @click="editItem(item)" color="#71c9ce" dark>
                        <v-icon>mdi-account-edit</v-icon>
                      </v-btn>
                      <!-- Delete Action -->
                      <v-btn icon color="#71c9ce" dark>
                        <v-icon @click="deleteItem(item)">mdi-trash-can</v-icon>
                      </v-btn>
                      <!-- See Detail Action -->
                      <v-btn icon color="#71c9ce" dark>
                        <v-icon @click="detailItem">mdi-eye</v-icon>
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
        </v-form>
      </validation-observer>
    </v-content>
  </v-container>
</template>

<script>
import { required, digits, max, regex } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

extend("digits", {
  ...digits,
  message: "{_field_} needs to be {length} digits. ({_value_})",
});

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});

extend("max", {
  ...max,
  message: "{_field_} may not be greater than {length} characters",
});

extend("regex", {
  ...regex,
  message: "{_field_} {_value_} does not match {regex}",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      terms: false,
      dialog: false,
      dialogDelete: false,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      storeName: "",
      address: "",
      // Form
      headers: [
        { text: "Store Name", align: "start", value: "storeName" },
        { text: "Address", value: "address" },
        { text: "Action", value: "action", sortable: false },
      ],
      datas: [],
      editedIndex: -1,
      editedDatas: {
        storeName: "",
        address: "",
      },
      defaultDatas: {
        storeName: "",
        address: "",
      },
    };
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Product" : "Edit Product";
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

    detailItem() {
      this.$router.push({ name: "BranchesDetail" });
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
      this.$refs.observer.validate();
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
