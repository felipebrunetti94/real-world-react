import * as HOME from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case HOME.FETCH_ALL_REQUEST:
      return {
        ...state,
        isTagsLoading: true,
        isFeedLoading: true,
      };
    case HOME.FETCH_ARTICLES_FEED_REQUEST:
    case HOME.FETCH_USER_FEED_REQUEST:
    case HOME.FETCH_GLOBAL_FEED_REQUEST:
      return {
        ...state,
        isFeedLoading: true,
      };
    case HOME.FETCH_TAGS_REQUEST_ERROR:
      return {
        ...state,
        isTagsLoading: false,
        tagError: action.error,
      };
    case HOME.FETCH_ARTICLES_FEED_ERROR:
    case HOME.FETCH_USER_FEED_ERROR:
    case HOME.FETCH_GLOBAL_FEED_ERROR:
      return {
        ...state,
        isFeedLoading: false,
        feedError: action.error,
      };
    case HOME.FETCH_TAGS_REQUEST_SUCCESS:
      return {
        ...state,
        isTagsLoading: false,
        tags: action.tags,
      };
    case HOME.FETCH_ARTICLES_FEED_SUCCESS:
    case HOME.FETCH_USER_FEED_SUCCESS:
    case HOME.FETCH_GLOBAL_FEED_SUCCESS:
      return {
        ...state,
        isFeedLoading: false,
        feed: action.feed,
      };
    default:
      return state;
  }
};

export default reducer;
