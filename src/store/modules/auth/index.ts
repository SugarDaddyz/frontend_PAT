import { Module } from "vuex";
import { RootState } from "../../store.types";
import { userActions } from "./actions";
import { authGetters } from "./getters";
import { authMutations } from "./mutations";
import { AuthState } from "./auth.types";

const _authState: AuthState = {
  isLoading: false,
  isError: false,
  errMessage: "",
};

export const authModule: Module<AuthState, RootState> = {
  state: _authState,
  actions: userActions,
  mutations: authMutations,
  getters: authGetters,
};
