import ArticleList from "./ArticleList";

const Feed = ({ feed, isLoading, error }) => {
  return (
    <>
      <ArticleList articles={feed} isLoading={isLoading} error={error} />
    </>
  );
};

export default Feed;
