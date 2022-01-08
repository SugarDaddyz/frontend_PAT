import { GetterTree } from "vuex";
import { RootState } from "../../store.types";
import { AuthState } from "./auth.types";

export const authGetters: GetterTree<AuthState, RootState> = {
  getAccessToken(state): string {
    return state.auth?.accessToken ?? "";
  },
  isAuthenticated(state): boolean {
    return state.isAuthenticated;
  },
};
