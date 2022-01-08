import { MutationTree } from "vuex";
import { UserState } from "./user.types";

enum UserMutations {
  LOGIN_REQUEST = "LOGIN_REQUEST",
}

export const userMutations: MutationTree<UserState> = {
  [UserMutations.LOGIN_REQUEST](state, payload) {
    state = payload;
  },
};
