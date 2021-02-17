const makeGetUserFeed = ({ articleRepository }) => {
  return async (user, { onSuccess, onError }) => {
    try {
      const userFeed = await articleRepository.fromUser(user);
      onSuccess(userFeed);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeGetUserFeed;
