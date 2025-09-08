import React from "react";

const Search = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input
        className="input"
        onChange={inputHandler}
        placeholder="輸入英文搜索"
        type="text"
        style={{ width: "40vw" }}
      />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
