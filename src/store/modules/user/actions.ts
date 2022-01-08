import axios from "axios";
import { ActionTree } from "vuex";
import { baseUrl } from "../../../constants/constants";
import { AppResponse } from "../../models/response_model";
import { UserModel } from "../../models/user_model";
import { RootState } from "../../store.types";
import { USER_MUTATIONS } from "./mutations";
import { UserState } from "./user.types";

export const userActions: ActionTree<UserState, RootState> = {
  async getUserList({ commit }): Promise<void> {
    try {
      commit(USER_MUTATIONS.GET_USER_LIST_REQUEST);
      const res = await axios.get<AppResponse<UserModel[]>>(baseUrl + "/user", {
        params: {
          limit: 25,
        },
      });
      if (res.status < 201) {
        if (res.data.data.length > 0) {
          commit(USER_MUTATIONS.GET_USER_LIST_SUCCESS, res.data.data);
          return;
        }
      }
      throw res;
    } catch (error: any) {
      commit(USER_MUTATIONS.GET_USER_LIST_FAILURE, error.toString());
      console.log(error);
    }
  },

  async addNewUser({ commit, rootState, dispatch }, data): Promise<void> {
    try {
      commit(USER_MUTATIONS.CREATE_NEW_USER_REQUEST);
      const res = await axios.post<AppResponse<UserModel>>(
        baseUrl + "/user/create",
        data,
        {
          headers: {
            Authorization: `Bearer ${rootState.auth.auth?.accessToken ?? ""}`,
          },
        }
      );
      if (res.status <= 201) {
        commit(USER_MUTATIONS.CREATE_NEW_USER_SUCCESS, res.data.data);
        dispatch("getUserList");
        return;
      }
      throw res;
    } catch (error: any) {
      commit(USER_MUTATIONS.CREATE_NEW_USER_FAILURE, error.toString());
    }
  },

  async editOneUser({ commit, rootState, dispatch }, data): Promise<void> {
    try {
      const { id, ...rest } = data;
      commit(USER_MUTATIONS.UPDATE_ONE_USER_REQUEST);
      const res = await axios.put<AppResponse<UserModel>>(
        baseUrl + "/user/update/" + id,
        rest,
        {
          headers: {
            Authorization: `Bearer ${rootState.auth.auth?.accessToken ?? ""}`,
          },
        }
      );
      if (res.status <= 201) {
        commit(USER_MUTATIONS.UPDATE_ONE_USER_SUCCESS, res.data.data);
        dispatch("getUserList");
        return;
      }
      throw res;
    } catch (error: any) {
      commit(USER_MUTATIONS.UPDATE_ONE_USER_FAILURE, error.toString());
    }
  },
};
