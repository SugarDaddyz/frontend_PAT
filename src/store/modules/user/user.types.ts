import { UserModel } from "../../models/user_model";

export interface UserState {
  isLoading?: boolean;
  errMessage?: string;
  isError?: boolean;
  users: UserModel[];
}
