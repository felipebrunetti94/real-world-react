const makeEditArticle = ({ articleRepository }) => {
  return async (articleInfo, user, { onSuccess, onError }) => {
    try {
      const article = await articleRepository.update(articleInfo, user);
      onSuccess(article);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeEditArticle;
