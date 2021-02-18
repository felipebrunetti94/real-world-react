import useHome from "../../state/home/useHome";
import useAuth from "../../state/auth/useAuth";
import Banner from "./Banner";
import PopularTagList from "../tag/PopularTagList";
import Feed from "../article/Feed";
import * as container from "../../container";

const TABS = {
  GLOBAL: "GLOBAL",
  USER: "USER",
  TAG: "TAG",
};

const HomePage = () => {
  const { user, loggedIn } = useAuth();

  const {
    feed,
    tags,
    tab,
    selectedTag,
    fetchTagFeed,
    fetchGlobalFeed,
    fetchUserFeed,
    isTagsLoading,
    isFeedLoading,
    feedError,
    tagError,
    onToggleLike,
  } = useHome({ ...container, user });
  return (
    <div className="home-page">
      {!loggedIn && <Banner />}
      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                {user.username && (
                  <li className="nav-item" onClick={fetchUserFeed}>
                    <span
                      className={`nav-link ${tab === TABS.USER && "active"}`}
                    >
                      Your Feed
                    </span>
                  </li>
                )}
                <li className="nav-item" onClick={fetchGlobalFeed}>
                  <span
                    className={`nav-link ${tab === TABS.GLOBAL && "active"}`}
                  >
                    Global Feed
                  </span>
                </li>
                {selectedTag && tab === TABS.TAG && (
                  <li className="nav-item">
                    <span className={"nav-link active"}>
                      <i className="ion-pound" />
                      {selectedTag}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <Feed
              feed={feed}
              isLoading={isFeedLoading}
              error={feedError}
              onToggleLike={onToggleLike}
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
