const makeGetArticle = ({ articleRepository }) => {
  return async (slug, user, { onSuccess, onError }) => {
    try {
      const article = await articleRepository.fromSlug(slug, user);
      onSuccess(article);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeGetArticle;
