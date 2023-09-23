const SearchAside = () => {
  return (
    <div>
      <p>Enter a City Name</p>
      <input type="search" placeholder="Enter city name here"></input>
      <button>Search</button>
      <p>----------- or -----------</p>
      <button>Use Current Location</button>
    </div>
  );
};

export default SearchAside;
