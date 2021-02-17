const NavFeed = ({ navItems }) => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {navItems.map((item) => (
          <li className="nav-item" key={item.name} onClick={item.onClick}>
            <a
              className={`nav-link ${item.selected ? "active" : "disabled"}`}
              href="/"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavFeed;
