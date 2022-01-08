import { Module } from "vuex";
import { RootState } from "../../store.types";
import { userActions } from "./actions";
import { userGetters } from "./getters";
import { userMutations } from "./mutations";
import { UserState } from "./user.types";

const _userState: UserState = {
  firstName: "admin",
  lastName: "admin",
};

export const userModule: Module<UserState, RootState> = {
  state: _userState,
  actions: userActions,
  mutations: userMutations,
  getters: userGetters,
};
