import commentMapper from "./commentMapper";

const makeCommentRepository = ({ conduitService }) => ({
  async byArticle(slug) {
    const { data } = await conduitService.get(`articles/${slug}/comments`);

    return data.comments.map(commentMapper.toEntity);
  },

  async add(comment, articleSlug, { auth }) {
    const {
      data,
    } = await conduitService.authPost(
      `articles/${articleSlug}/comments`,
      auth,
      { comment }
    );

    return commentMapper.toEntity(data.comment);
  },

  remove(comment, articleSlug, { auth }) {
    return conduitService.authDel(
      `articles/${articleSlug}/comments/${comment.id}`,
      auth
    );
  },
});

export default makeCommentRepository;
