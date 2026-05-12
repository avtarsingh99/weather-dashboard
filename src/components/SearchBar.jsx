import { useState } from "react"

const SearchBar = ({onSearch}) => {

    const [input, setInput] = useState("");

    const handleClick = () => {
        if(input.trim() === "") return;
        onSearch(input.trim());
        setInput("")
    }

    const handleKeyDown = (e) => {
        if(e.key === "Enter") handleClick();
    };

  return (
    <div className="search-bar">
    <div style={{position: 'relative', width: '100%'}}>
      <input 
        style={{width: '100%'}}
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {input &&(
        <span className="clear-btn" onClick={()=> setInput("")}>x</span>
      )}
      </div>
      <button onClick={handleClick} className="weather-btn">Get Weather</button>
    </div>
  )
};

export default SearchBar
