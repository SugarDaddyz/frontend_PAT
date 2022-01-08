import { AuthState } from "./modules/auth/auth.types";
import { UserState } from "./modules/user/user.types";

export interface RootState {
  user: UserState;
  auth: AuthState;
}
