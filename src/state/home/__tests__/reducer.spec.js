import reducer from "../reducer";
import * as HOME from "../types";

describe("State :: Auth :: reducer", () => {
  describe("when fetch all requests", () => {
    it("enable loading", () => {
      const state = {};
      const action = { type: HOME.FETCH_ALL_REQUEST };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: true,
        isTagsLoading: true,
      });
    });
  });

  describe("when fetch articles feed request", () => {
    it("enable loading", () => {
      const state = {};
      const action = { type: HOME.FETCH_TAGS_REQUEST, tag: "tag" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: true,
        tab: "TAG",
        selectedTag: "tag",
        feedError: null,
      });
    });
  });

  describe("when fetch user feed request", () => {
    it("enable loading", () => {
      const state = {};
      const action = { type: HOME.FETCH_USER_FEED_REQUEST };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: true,
        tab: "USER",
        feedError: null,
      });
    });
  });

  describe("when fetch global feed request", () => {
    it("enable loading", () => {
      const state = {};
      const action = { type: HOME.FETCH_GLOBAL_FEED_REQUEST };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: true,
        tab: "GLOBAL",
        feedError: null,
      });
    });
  });

  describe("when fetch tags error", () => {
    it("disable loadin and update error", () => {
      const state = {};
      const action = { type: HOME.FETCH_TAGS_REQUEST_ERROR, error: "ohno!" };
      expect(reducer(state, action)).toEqual({
        isTagsLoading: false,
        tagError: "ohno!",
      });
    });
  });

  describe("when fetch article feed error", () => {
    it("disable loadin and update error", () => {
      const state = {};
      const action = { type: HOME.FETCH_TAG_FEED_ERROR, error: "ohno!" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: false,
        feedError: "ohno!",
      });
    });
  });

  describe("when fetch user feed error", () => {
    it("disable loadin and update error", () => {
      const state = {};
      const action = { type: HOME.FETCH_USER_FEED_ERROR, error: "ohno!" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: false,
        feedError: "ohno!",
      });
    });
  });

  describe("when fetch global feed error", () => {
    it("disable loadin and update error", () => {
      const state = {};
      const action = { type: HOME.FETCH_GLOBAL_FEED_ERROR, error: "ohno!" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: false,
        feedError: "ohno!",
      });
    });
  });

  describe("when fetch tag success", () => {
    it("disable loadin and update tags", () => {
      const state = {};
      const action = { type: HOME.FETCH_TAGS_REQUEST_SUCCESS, tags: "tags" };
      expect(reducer(state, action)).toEqual({
        isTagsLoading: false,
        tags: "tags",
        tagError: null,
      });
    });
  });

  describe("when fetch articles success", () => {
    it("disable loadin and update feed", () => {
      const state = {};
      const action = { type: HOME.FETCH_TAG_FEED_SUCCESS, feed: "feed" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: false,
        feed: "feed",
        feedError: null,
      });
    });
  });

  describe("when fetch user feed success", () => {
    it("disable loadin and update feed", () => {
      const state = {};
      const action = { type: HOME.FETCH_USER_FEED_SUCCESS, feed: "feed" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: false,
        feed: "feed",
        feedError: null,
      });
    });
  });

  describe("when fetch global feed success", () => {
    it("disable loadin and update feed", () => {
      const state = {};
      const action = { type: HOME.FETCH_GLOBAL_FEED_SUCCESS, feed: "feed" };
      expect(reducer(state, action)).toEqual({
        isFeedLoading: false,
        feed: "feed",
        feedError: null,
      });
    });
  });
});
