import Vue from "vue";
import Vuex, { createLogger, StoreOptions } from "vuex";
import createPersistedState from "vuex-persistedstate";

import { authModule } from "./modules/auth";
import { userModule } from "./modules/user";
import { RootState } from "./store.types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    user: userModule,
    auth: authModule,
  },
  plugins: [
    createLogger(),
    createPersistedState({
      paths: ["auth"],
    }),
  ],
};

export default new Vuex.Store<RootState>(store);
