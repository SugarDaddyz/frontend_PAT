import { AppResponse } from "./response_model";
import { UserModel } from "./user_model";

export interface AuthResponse {
  accessToken: string;
  data: UserModel;
}

export default interface LoginResponseModel extends AppResponse<AuthResponse> {}
