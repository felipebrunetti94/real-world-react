import useHome from "../../state/home/useHome";
import useAuth from "../../state/auth/useAuth";
import Banner from "./Banner";
import PopularTagList from "../tag/PopularTagList";
import Feed from "../article/Feed";

import * as container from "../../container";

const HomePage = () => {
  const { user } = useAuth();
  const {
    feed,
    tags,
    fetchTagFeed,
    fetchGlobalFeed,
    isTagsLoading,
    isFeedLoading,
    feedError,
    tagError,
  } = useHome({ ...container, user });
  const navItems = [
    {
      name: "Global Feed",
      onClick: fetchGlobalFeed,
    },
  ];
  return (
    <div className="home-page">
      {!loggedIn && <Banner />}
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <Feed
              feed={feed}
              navItems={navItems}
              isLoading={isFeedLoading}
              error={feedError}
            />
          </div>

          <div className="col-md-3">
            <div className="sidebar">
              <PopularTagList
                tags={tags}
                onSelectTag={fetchTagFeed}
                isLoading={isTagsLoading}
                error={tagError}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
