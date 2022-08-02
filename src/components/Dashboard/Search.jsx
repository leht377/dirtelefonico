const Search = ({ search, setSearch }) => {
  return (
    <div className="d-flex mt-4">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={setSearch}
      />
      <button className="btn btn-outline-success">Search</button>
    </div>
  );
};

export default Search;
