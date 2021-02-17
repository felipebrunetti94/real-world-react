import commentMapper from "./commentMapper";

const makeCommentRepository = ({ conduitService }) => ({
  async byArticle(slug) {
    const { data } = await conduitService.get(`articles/${slug}/comments`);

    return data.comments.map(commentMapper.toEntity);
  },

  async add(comment, articleSlug, { token }) {
    const {
      data,
    } = await conduitService.authPost(
      `articles/${articleSlug}/comments`,
      token,
      { comment }
    );

    return commentMapper.toEntity(data.comment);
  },

  remove(comment, articleSlug, { token }) {
    return conduitService.authDel(
      `articles/${articleSlug}/comments/${comment.id}`,
      token
    );
  },
});

export default makeCommentRepository;
