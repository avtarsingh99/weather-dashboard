import { useState } from "react"

const SearchBar = ({ city }) => {

  const [input, setInput] = useState("");

  const handleClick = () => {
    if (input.trim() === "") return;
    city(input.trim());
    setInput("")
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleClick();
  };

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Enter city name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {input && (
          <span className="clear-btn" onClick={() => setInput("")}>x</span>
        )}
      </div>
      <button onClick={handleClick} className="weather-btn">Get Weather</button>
    </div>
  )
};

export default SearchBar
