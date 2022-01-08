import { AuthResponse } from "../../models/login_model";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading?: boolean;
  auth?: AuthResponse;
  isError?: boolean;
  errMessage?: string;
}
