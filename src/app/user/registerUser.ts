import { User, UserRepository, UserAuthInfo } from "../../domain/user/User";

type Callback = {
  onSuccess(user: User): void;
  onError(error: Error): void;
};

const makeRegisterUSer = (userRepository: UserRepository) => {
  return async (userInfo: UserAuthInfo, { onSuccess, onError }: Callback) => {
    try {
      const newUser = await userRepository.add(userInfo);
      onSuccess(newUser);
    } catch (error) {
      onError(error as Error);
    }
  };
};

export default makeRegisterUSer;
