import { Redirect } from "react-router-dom";
import useAuth from "../../state/auth/useAuth";

// const RedirectButton = (Button, user) => (...props) => {
//   if (user.token) {
//     return <Button {...props} />;
//   } else {
//     return <Redirect />;
//   }
// };

const RedirectButton = ({ children, isSubmiting }) => {
  const { loggedIn } = useAuth();
  if (!isSubmiting || loggedIn) {
    return <>{children}</>;
  } else {
    return <Redirect to="/login" />;
  }
};

const FavoriteButton = ({ article, onToggleLike }) => {
  const className = article.favorited ? "btn-primary" : "btn-outline-primary";
  return (
    <RedirectButton isSubmiting={article.isSubmiting}>
      <button
        disabled={article.isSubmiting}
        className={`btn btn-sm pull-xs-right ${className}`}
        onClick={(e) => {
          e.preventDefault();
          onToggleLike(article);
        }}
      >
        <i className="ion-heart"></i> {`${article.favoritesCount}`}
      </button>
    </RedirectButton>
  );
};

export default FavoriteButton;
