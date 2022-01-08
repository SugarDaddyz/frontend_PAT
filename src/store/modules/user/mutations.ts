import { MutationTree } from "vuex";
import { UserState } from "./user.types";

enum UserMutations {
  GET_USER_LIST_REQUEST = "GET_USER_LIST_REQUEST",
  GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS",
  GET_USER_LIST_FAILURE = "GET_USER_LIST_FAILURE",
}

export const userMutations: MutationTree<UserState> = {
  [UserMutations.GET_USER_LIST_REQUEST](state, payload) {
    state = payload;
  },
};
