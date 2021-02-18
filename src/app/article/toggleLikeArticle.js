const makeToggleLikeArticle = ({ articleRepository }) => {
  return async (article, user, { onSuccess, onError }) => {
    try {
      let editedArticle;
      if (article.favorited) {
        editedArticle = await articleRepository.disLike(article, user);
      } else {
        editedArticle = await articleRepository.like(article, user);
      }
      onSuccess(editedArticle);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeToggleLikeArticle;
