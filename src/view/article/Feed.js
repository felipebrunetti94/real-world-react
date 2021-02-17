import NavFeed from "./NavFeed";
import ArticleList from "./ArticleList";

const Feed = ({ feed, navItems, isLoading, error }) => {
  return (
    <>
      <NavFeed navItems={navItems} />
      <ArticleList articles={feed} isLoading={isLoading} error={error} />
    </>
  );
};

export default Feed;
