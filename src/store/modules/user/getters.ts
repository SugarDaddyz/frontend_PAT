import { GetterTree } from "vuex";
import { RootState } from "../../store.types";
import { UserState } from "./user.types";

export const userGetters: GetterTree<UserState, RootState> = {
  getUserInfo(state): string {
    return "hello user info";
  },
};
