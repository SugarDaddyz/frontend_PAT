import { MutationTree } from "vuex";
import LoginResponseModel from "../../models/login_model";
import { AuthState } from "./auth.types";

export enum AUTH_MUTATION {
  LOGIN_REQUEST = "LOGIN_REQUEST",
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILURE = "LOGIN_FAILURE",
  LOGOUT_REQUEST = "LOGOUT_REQUEST",
}

export const authMutations: MutationTree<AuthState> = {
  [AUTH_MUTATION.LOGIN_REQUEST](state, payload) {
    state.isLoading = true;
    state.isError = false;
    state.isAuthenticated = false;
    state.errMessage = "Testing error message";
  },
  [AUTH_MUTATION.LOGIN_SUCCESS](state, payload: LoginResponseModel) {
    state.isLoading = false;
    state.isAuthenticated = true;
    state.isError = false;
    state.errMessage = "";
    state.auth = payload.data;
  },
  [AUTH_MUTATION.LOGIN_FAILURE](state, payload) {
    state.isLoading = false;
    state.isAuthenticated = false;
    state.isError = true;
    state.errMessage = payload;
  },
  [AUTH_MUTATION.LOGOUT_REQUEST](state, payload) {
    state.isLoading = false;
    state.isAuthenticated = false;
    state.isError = false;
    state.errMessage = "";
    state.auth = undefined;
  },
};
