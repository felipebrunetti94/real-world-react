import * as HOME from "./types";
const TABS = {
  GLOBAL: "GLOBAL",
  USER: "USER",
  TAG: "TAG",
};

const reducer = (state, action) => {
  switch (action.type) {
    case HOME.FETCH_ALL_REQUEST:
      return {
        ...state,
        isTagsLoading: true,
        isFeedLoading: true,
      };
    case HOME.FETCH_TAGS_REQUEST:
      return {
        ...state,
        isFeedLoading: true,
        tab: TABS.TAG,
        selectedTag: action.tag,
        feedError: null,
      };
    case HOME.FETCH_USER_FEED_REQUEST:
      return {
        ...state,
        isFeedLoading: true,
        tab: TABS.USER,
        feedError: null,
      };
    case HOME.FETCH_GLOBAL_FEED_REQUEST:
      return {
        ...state,
        isFeedLoading: true,
        tab: TABS.GLOBAL,
        feedError: null,
      };
    case HOME.FETCH_TAGS_REQUEST_ERROR:
      return {
        ...state,
        isTagsLoading: false,
        tagError: action.error,
      };
    case HOME.FETCH_TAG_FEED_ERROR:
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
        tagError: null,
      };
    case HOME.FETCH_TAG_FEED_SUCCESS:
    case HOME.FETCH_USER_FEED_SUCCESS:
    case HOME.FETCH_GLOBAL_FEED_SUCCESS:
      return {
        ...state,
        isFeedLoading: false,
        feed: action.feed,
        feedError: null,
      };
    default:
      return state;
  }
};

export default reducer;
