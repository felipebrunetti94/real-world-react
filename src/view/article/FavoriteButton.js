import { Redirect } from "react-router-dom";

const FavoriteButton = ({ author }) => (
  <button className="btn btn-outline-primary btn-sm pull-xs-right">
    <i className="ion-heart"></i> {author.favoritesCount}
  </button>
);

export default FavoriteButton;
