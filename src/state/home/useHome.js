import { useReducer, useEffect } from "react";
import * as HOME from "./types";
import reducer from "./reducer";
import initialState from "./initialState";

const TABS = {
  GLOBAL: "GLOBAL",
  USER: "USER",
  TAG: "TAG",
};

const useHome = ({
  getPopularTags,
  getGlobalFeed,
  getTagFeed,
  getUserFeed,
  toggleLikeArticle,
  user = {},
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchFeedAndTags = () => {
    dispatch({ type: HOME.FETCH_ALL_REQUEST });
    getPopularTags({
      onSuccess: (tags) =>
        dispatch({ type: HOME.FETCH_TAGS_REQUEST_SUCCESS, tags }),
      onError: (error) =>
        dispatch({ type: HOME.FETCH_TAGS_REQUEST_ERROR, error }),
    });
    getGlobalFeed(user, {
      onSuccess: (feed) =>
        dispatch({ type: HOME.FETCH_GLOBAL_FEED_SUCCESS, feed }),
      onError: (error) =>
        dispatch({ type: HOME.FETCH_GLOBAL_FEED_ERROR, error }),
    });
  };

  useEffect(() => {
    fetchFeedAndTags();
  }, []);

  return {
    isFeedLoading: state.isFeedLoading,
    isTagsLoading: state.isTagsLoading,
    feedError: state.feedError,
    tagError: state.tagError,
    feed: state.feed,
    tags: state.tags,
    selectedTag: state.selectedTag,
    tab: state.tab,
    fetchTagFeed: (tag) => {
      dispatch({ type: HOME.FETCH_TAGS_REQUEST, tag });

      return getTagFeed(tag, user, {
        onSuccess: (feed) =>
          dispatch({ type: HOME.FETCH_TAG_FEED_SUCCESS, feed }),
        onError: (error) =>
          dispatch({ type: HOME.FETCH_TAG_FEED_ERROR, error }),
      });
    },
    fetchUserFeed: () => {
      dispatch({ type: HOME.FETCH_USER_FEED_REQUEST });

      return getUserFeed(user, {
        onSuccess: (feed) =>
          dispatch({ type: HOME.FETCH_USER_FEED_SUCCESS, feed }),
        onError: (error) =>
          dispatch({ type: HOME.FETCH_USER_FEED_ERROR, error }),
      });
    },
    fetchGlobalFeed: () => {
      dispatch({ type: HOME.FETCH_GLOBAL_FEED_REQUEST });

      return getGlobalFeed(user, {
        onSuccess: (feed) =>
          dispatch({ type: HOME.FETCH_GLOBAL_FEED_SUCCESS, feed }),
        onError: (error) =>
          dispatch({ type: HOME.FETCH_GLOBAL_FEED_ERROR, error }),
      });
    },
    onToggleLike: (article) => {
      dispatch({ type: HOME.TOGGLE_LIKE_REQUEST, article });

      return toggleLikeArticle(article, user, {
        onSuccess: (editedArticle) =>
          dispatch({ type: HOME.TOGGLE_LIKE_SUCCESS, article: editedArticle }),
        onError: (article) =>
          dispatch({ type: HOME.TOGGLE_LIKE_SUCCESS, article }),
      });
    },
  };
};

export default useHome;
