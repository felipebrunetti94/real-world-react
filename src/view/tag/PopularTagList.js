import TagList from "./TagList";

const PopularTagList = ({ tags, onSelectTag, error, isLoading }) => (
  <>
    <p>Popular Tags</p>
    <TagList
      tags={tags}
      onSelectTag={onSelectTag}
      isLoading={isLoading}
      error={error}
    />
  </>
);

export default PopularTagList;
