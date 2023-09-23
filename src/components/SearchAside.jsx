const SearchAside = () => {
  return (
    <div className="search-container">
      <p className="search-title">Enter a City Name</p>
      <input
        className="search-input"
        type="search"
        placeholder="Enter city name here"
      ></input>
      <button className="search-button">Search</button>
      <p>------------- or -------------</p>
      <button className="current-location">Use Current Location</button>
    </div>
  );
};

export default SearchAside;
