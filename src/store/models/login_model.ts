import { AppResponse } from "./response_model";

export interface AuthResponse {
  accessToken: string;
  data: {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    roleId: number;
    role: {
      id: number;
      name: string;
    };
    storeId: number;
    store: {
      id: number;
      name: string;
      address: string;
      longitude: number;
      latitude: number;
    };
  };
}

export default interface LoginResponseModel extends AppResponse<AuthResponse> {}
