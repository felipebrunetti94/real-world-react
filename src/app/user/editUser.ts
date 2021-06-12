import { UserRepository, User } from "../../domain/user/User";

export type Callback = {
  onSuccess(user: User): void;
  onError(error: Error): void;
};

export type EditUser = (user: User, callback: Callback) => void;

const makeEditUser = (userRepository: UserRepository) => {
  return async (user: User, { onError, onSuccess }: Callback) => {
    try {
      const { token, ...editedUser } = user;
      onSuccess(await userRepository.update(editedUser, token));
    } catch (error) {
      onError(error as Error);
    }
  };
};

export default makeEditUser;
