function SearchBar({ noresult, handleClick, handleClick2 }) {
  return (
    <>
      <input id="c" className="inputCity" placeholder="Type a city name" />
      <button
        className="findWeather"
        type="submit"
        onClick={() => {
          handleClick();
          handleClick2();
        }}
      >
        FIND WEATHER
      </button>
      <span className="showresults">{noresult}</span>
    </>
  );
}

export default SearchBar;
