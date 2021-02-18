import ArticlePreview from "./ArticlePreview";

const ArticleList = ({ articles, isLoading, error, onToggleLike }) => {
  if (error) {
    return <div className="article-preview">Error while loading articles.</div>;
  }

  if (isLoading) {
    return <div className="article-preview">Loading articles...</div>;
  }

  if (articles && !articles.length) {
    return <div className="article-preview">No articles are here... yet.</div>;
  }

  return articles.map((article) => (
    <ArticlePreview
      key={article.slug}
      article={article}
      onToggleLike={onToggleLike}
    />
  ));
};

export default ArticleList;
