const SearchBar = (props) => {
  return (
    <div className="searching">
      <form className="searchForm" onSubmit={props.onSubmit}>
        <div className="searchDiv">
          <input
            className="searchInput"
            type="text"
            name="search"
            value={props.value}
            placeholder="Search Events"
            onChange={props.onChange}
          ></input>
          <button className="searchButton" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar
