import articleMapper from "./articleMapper";

const makeArticleRepository = ({ conduitService }) => ({
  async getGlobalFeed({ auth }) {
    const { data } = await conduitService.authGet("articles", auth);
    console.log(data);
    return data.articles.map(articleMapper.toEntity);
  },

  async fromSlug(article, { auth }) {
    const { data } = await conduitService.authGet(
      `articles/${article.slug}`,
      auth
    );
    return articleMapper.toEntity(data.article);
  },

  async remove(article, { auth }) {
    await conduitService.authDelete(`articles/${article.slug}`, auth);
  },

  async update(article, { auth }, editedArticle) {
    const { data } = await conduitService.authUpdate(
      `articles/${article.slug}`,
      auth,
      {
        article: editedArticle,
      }
    );
    return data.article;
  },

  async fromTag(tag, { auth }) {
    const { data } = await conduitService.authGet("articles", auth, {
      params: { tag },
    });

    return data.articles.map(articleMapper.toEntity);
  },

  async fromUser({ auth }) {
    const articles = await conduitService.get("articles/feed", auth);
    return articles;
  },

  async fromAuthor(author, { auth }) {
    const { data } = await conduitService.authGet("articles", auth, {
      params: { author: author.username },
    });

    return data.articles.map(articleMapper.toEntity);
  },
});

export default makeArticleRepository;
