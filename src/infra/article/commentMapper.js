const commentMapper = {
  toEntity(commentData) {
    return {
      ...commentData,
      createdAt: new Date(commentData.createdAt),
      updatedAt: new Date(commentData.updatedAt),
    };
  },
};

export default commentMapper;
