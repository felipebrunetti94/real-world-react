const ToggleFollowButton = ({ author, onToggle, isLoading }) => (
  <button
    className="btn btn-sm btn-outline-secondary action-btn"
    disabled={isLoading}
    onClick={onToggle}
  >
    <i className="ion-plus-round"></i>
    &nbsp; {author.following ? "Unfollow" : "Follow"} {author.username}
  </button>
);

export default ToggleFollowButton;
