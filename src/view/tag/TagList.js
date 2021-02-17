const TagList = ({ tags, onSelectTag, isLoading, error }) => {
  if (error) {
    return "Error while loading tags.";
  }

  if (isLoading) {
    return "Loading...";
  }
  const handleClick = (e) => {
    e.preventDefault();
    onSelectTag(e.target.name);
  };
  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <a
          href="/"
          className="tag-pill tag-default"
          key={tag}
          name={tag}
          onClick={handleClick}
        >
          {tag}
        </a>
      ))}
    </div>
  );
};

export default TagList;
