const makeEditUser =
  ({ userRepository }) =>
  async (editedUser, { onError, onSuccess }) => {
    try {
      const updatedUser = await userRepository.update(editedUser);
      onSuccess(updatedUser);
    } catch (error) {
      onError(error);
    }
  };

export default makeEditUser;
