const makeGetPopularTags = ({ tagRepository }) => {
  return async ({ onSuccess, onError }) => {
    try {
      const popularTags = await tagRepository.getPopularTags();
      onSuccess(popularTags);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeGetPopularTags;
