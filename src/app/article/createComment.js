const makeDeleteArticle = ({ articleRepository }) => {
  return async (articleInfo, { onSuccess, onError }) => {
    try {
      const article = await articleRepository.delete(articleInfo);
      onSuccess(article);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeDeleteArticle;
