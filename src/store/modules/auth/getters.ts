import { GetterTree } from "vuex";
import { RootState } from "../../store.types";
import { AuthState } from "./auth.types";

export const authGetters: GetterTree<AuthState, RootState> = {
  isLoading(state): boolean {
    return state.isLoading ?? false;
  },
};
