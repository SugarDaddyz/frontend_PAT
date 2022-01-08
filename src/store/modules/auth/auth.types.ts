import { AuthResponse } from "../../models/login_model";

export interface AuthState {
  isLoading?: boolean;
  auth?: AuthResponse;
  isError?: boolean;
  errMessage?: string;
}
