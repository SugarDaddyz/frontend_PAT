import { MutationTree } from "vuex";
import { UserModel } from "../../models/user_model";
import { UserState } from "./user.types";

export enum USER_MUTATIONS {
  GET_USER_LIST_REQUEST = "GET_USER_LIST_REQUEST",
  GET_USER_LIST_SUCCESS = "GET_USER_LIST_SUCCESS",
  GET_USER_LIST_FAILURE = "GET_USER_LIST_FAILURE",
  CREATE_NEW_USER_REQUEST = "CREATE_NEW_USER_REQUEST",
  CREATE_NEW_USER_SUCCESS = "CREATE_NEW_USER_SUCCESS",
  CREATE_NEW_USER_FAILURE = "CREATE_NEW_USER_FAILURE",
  UPDATE_ONE_USER_REQUEST = "UPDATE_ONE_USER_REQUEST",
  UPDATE_ONE_USER_SUCCESS = "UPDATE_ONE_USER_SUCCESS",
  UPDATE_ONE_USER_FAILURE = "UPDATE_ONE_USER_FAILURE",
}

export const userMutations: MutationTree<UserState> = {
  [USER_MUTATIONS.GET_USER_LIST_REQUEST](state, payload) {
    state.isLoading = true;
    state.isError = false;
    state.errMessage = "";
  },
  [USER_MUTATIONS.GET_USER_LIST_SUCCESS](state, payload: UserModel[]) {
    state.isLoading = false;
    state.isError = false;
    state.errMessage = "";
    state.users = payload;
  },
  [USER_MUTATIONS.GET_USER_LIST_FAILURE](state, payload) {
    state.isLoading = false;
    state.isError = true;
    state.errMessage = payload;
  },
  [USER_MUTATIONS.CREATE_NEW_USER_REQUEST](state, payload) {
    state.isLoading = true;
    state.isError = false;
    state.errMessage = "";
  },
  [USER_MUTATIONS.CREATE_NEW_USER_SUCCESS](state, payload: UserModel) {
    state.isLoading = false;
    state.isError = false;
    state.errMessage = "";
    const newUserList = state.users;
    newUserList.push(payload);
    state.users = newUserList;
  },
  [USER_MUTATIONS.UPDATE_ONE_USER_FAILURE](state, payload) {
    state.isLoading = false;
    state.isError = true;
    state.errMessage = payload;
  },
  [USER_MUTATIONS.UPDATE_ONE_USER_REQUEST](state, payload) {
    state.isLoading = true;
    state.isError = false;
    state.errMessage = "";
  },
  [USER_MUTATIONS.UPDATE_ONE_USER_SUCCESS](state, payload: UserModel) {
    state.isLoading = false;
    state.isError = false;
    state.errMessage = "";
    const newUserList = state.users;
    newUserList.push(payload);
    state.users = newUserList;
  },
  [USER_MUTATIONS.CREATE_NEW_USER_FAILURE](state, payload) {
    state.isLoading = false;
    state.isError = true;
    state.errMessage = payload;
  },
};
