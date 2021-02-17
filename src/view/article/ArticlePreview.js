import { Link } from "react-router-dom";
import FormattedDate from "../date/FormattedDate";
import FavoriteButton from "./FavoriteButton";

const ArticlePreview = ({ article }) => {
  const { author, createdAt, slug, title, description } = article;
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
          <span className="date">
            <FormattedDate date={createdAt} />
          </span>
        </div>
        <FavoriteButton author={author} />
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
