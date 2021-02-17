const makeGetTagFeed = ({ articleRepository }) => {
  return async (tag, user, { onSuccess, onError }) => {
    try {
      const tagFeed = await articleRepository.fromTag(tag, user);
      onSuccess(tagFeed);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeGetTagFeed;
