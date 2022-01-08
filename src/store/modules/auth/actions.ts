import axios, { AxiosError, AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { baseUrl } from "../../../constants/constants";
import LoginResponseModel from "../../models/login_model";
import { RootState } from "../../store.types";
import { AuthState } from "./auth.types";
import { AUTH_MUTATION } from "./mutations";
import router from "../../../router";

export const userActions: ActionTree<AuthState, RootState> = {
  async login(
    { commit },
    { username, password }: { username: string; password: string }
  ): Promise<void> {
    try {
      commit(AUTH_MUTATION.LOGIN_REQUEST, "isLoading");
      const res = await axios.post<LoginResponseModel>(
        `${baseUrl}/auth/login`,
        {
          username,
          password,
        }
      );
      console.log("response", res.data);
      if (res.data.status <= 201 && res.data.data) {
        router.push({
          name: "Dashboard",
        });
        commit(AUTH_MUTATION.LOGIN_SUCCESS, res.data);
        return;
      }
      throw res;
    } catch (error: AxiosResponse | any) {
      commit(
        AUTH_MUTATION.LOGIN_FAILURE,
        error?.data?.message ??
          error?.response?.data?.message ??
          error.message ??
          "Terjadi Kesalahan"
      );
    }
  },
};
