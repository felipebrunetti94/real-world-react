const commentMapper = {
  toEntity(articleData) {
    return {
      ...articleData,
      createdAt: new Date(articleData.createdAt),
      updatedAt: new Date(articleData.updatedAt),
    };
  },
};

export default commentMapper;
