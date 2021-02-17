const makeDeleteArticle = ({ articleRepository }) => {
  return async (articleInfo, user, { onSuccess, onError }) => {
    try {
      const article = await articleRepository.delete(articleInfo, user);
      onSuccess(article);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeDeleteArticle;
