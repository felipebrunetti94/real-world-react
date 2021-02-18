import ArticleList from "./ArticleList";

const Feed = ({ feed, isLoading, error, onToggleLike }) => {
  return (
    <>
      <ArticleList
        articles={feed}
        isLoading={isLoading}
        error={error}
        onToggleLike={onToggleLike}
      />
    </>
  );
};

export default Feed;
