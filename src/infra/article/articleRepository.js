import articleMapper from "./articleMapper";

const makeArticleRepository = ({ conduitService }) => ({
  async getGlobalFeed({ token }) {
    const { data } = await conduitService.authGet("articles", token);
    return data.articles.map(articleMapper.toEntity);
  },

  async fromSlug(article, { token }) {
    const { data } = await conduitService.authGet(
      `articles/${article.slug}`,
      token
    );
    return articleMapper.toEntity(data.article);
  },

  async remove(article, { token }) {
    await conduitService.authDelete(`articles/${article.slug}`, token);
  },

  async update(article, { token }, editedArticle) {
    const { data } = await conduitService.authUpdate(
      `articles/${article.slug}`,
      token,
      {
        article: editedArticle,
      }
    );
    return data.article;
  },

  async fromTag(tag, { token }) {
    const { data } = await conduitService.authGet("articles", token, {
      params: { tag },
    });

    return data.articles.map(articleMapper.toEntity);
  },

  async fromUser({ token }) {
    const { data } = await conduitService.authGet("articles/feed", token);
    return data.articles.map(articleMapper.toEntity);
  },

  async fromAuthor(author, { token }) {
    const { data } = await conduitService.authGet("articles", token, {
      params: { author: author.username },
    });

    return data.articles.map(articleMapper.toEntity);
  },
});

export default makeArticleRepository;
