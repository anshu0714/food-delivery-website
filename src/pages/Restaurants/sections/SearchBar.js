const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button type="submit" className="search-btn" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
