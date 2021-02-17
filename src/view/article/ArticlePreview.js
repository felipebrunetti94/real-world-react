import { Link } from "react-router-dom";

const ArticlePreview = ({ article }) => {
  const {
    author,
    createdAt,
    favoritesCount,
    slug,
    title,
    description,
  } = article;
  return (
    <div className="article-preview">
      <div className="article-meta">
        <a href="profile.html">
          <img src={author.image} alt={`${author.username} profile`} />
        </a>
        <div className="info">
          <Link to={`/@${author.username}`} className="author">
            {author.username}
          </Link>
          <span className="date">{createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {favoritesCount}
        </button>
      </div>
      <Link to={`/article/${slug}`} className="preview-link">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};

export default ArticlePreview;
