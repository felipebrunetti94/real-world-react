const makeDeleteComment = ({ commentRepository }) => {
  return async (articleInfo, user, { onSuccess, onError }) => {
    try {
      await commentRepository.delete(articleInfo, user);
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };
};

export default makeDeleteComment;
