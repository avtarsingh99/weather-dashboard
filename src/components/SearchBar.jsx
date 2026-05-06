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
    <div>
      <input 
        type="text"
        placeholder="Enter city name..."
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Get Weather</button>
    </div>
  );
};

export default SearchBar
