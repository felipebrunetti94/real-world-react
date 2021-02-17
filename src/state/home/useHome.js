import { useReducer, useEffect } from "react";
import * as HOME from "./types";
import reducer from "./reducer";
import initialState from "./initialState";

const useHome = ({
  getPopularTags,
  getGlobalFeed,
  getTagFeed,
  getUserFeed,
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
    fetchTagFeed: (tag) => {
      dispatch({ type: HOME.FETCH_TAGS_REQUEST, tag });
      return getTagFeed(tag, {
        onSuccess: (articles) =>
          dispatch({ type: HOME.FETCH_ARTICLES_FEED_SUCCESS, articles }),
        onError: (error) =>
          dispatch({ type: HOME.FETCH_ARTICLES_FEED_ERROR, error }),
      });
    },
    fetchUserFeed: (user) => {
      dispatch({ type: HOME.FETCH_USER_FEED_REQUEST });
      return getUserFeed(user, {
        onSuccess: (articles) =>
          dispatch({ type: HOME.FETCH_USER_FEED_SUCCESS, articles }),
        onError: (error) =>
          dispatch({ type: HOME.FETCH_USER_FEED_ERROR, error }),
      });
    },
    fetchGlobalFeed: (user) => {
      dispatch({ type: HOME.FETCH_GLOBAL_FEED_REQUEST });
      return getUserFeed(user, {
        onSuccess: (articles) =>
          dispatch({ type: HOME.FETCH_GLOBAL_FEED_SUCCESS, articles }),
        onError: (error) =>
          dispatch({ type: HOME.FETCH_GLOBAL_FEED_ERROR, error }),
      });
    },
  };
};

export default useHome;
