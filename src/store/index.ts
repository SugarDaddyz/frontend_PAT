import Vue from "vue";
import Vuex, { createLogger, StoreOptions } from "vuex";
import { authModule } from "./modules/auth";
import { userModule } from "./modules/user";
import { RootState } from "./store.types";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  modules: {
    user: userModule,
    auth: authModule,
  },
  plugins: [createLogger()],
};

export default new Vuex.Store<RootState>(store);
