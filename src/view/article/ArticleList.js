import ArticlePreview from "./ArticlePreview";

const ArticleList = ({ articles, isLoading, error }) => {
  if (error) {
    return "Error while loading articles.";
  }

  if (isLoading) {
    return "Loading articles...";
  }

  return articles.map((article) => <ArticlePreview article={article} />);
};

export default ArticleList;
