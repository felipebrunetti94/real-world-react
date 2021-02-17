const makeCreateArticle = ({ articleRepository }) => {
  return async (articleInfo, { onSuccess, onError }) => {
    try {
      const article = await articleRepository.add(articleInfo);
      onSuccess(article);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeCreateArticle;
