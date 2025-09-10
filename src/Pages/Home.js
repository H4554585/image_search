import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";

const Home = () => {
  let [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");

  const initialURL =
    "https://image-search-60ni.onrender.com/api/search?page=1&per_page=15";
  let searchURL = `https://image-search-60ni.onrender.com/api/search?query=${input}&page=1&per_page=15`;

  const search = async (url) => {
    let result = await axios.get(url);
    // console.log(result);
    setData(result.data.photos);
    setCurrentSearch(input);
  };

  const morePicture = async () => {
    let newURL;
    const nextPage = page + 1;
    setPage(nextPage);

    if (currentSearch === "") {
      newURL = `https://image-search-60ni.onrender.com/api/search?page=${nextPage}&per_page=15`;
    } else {
      newURL = `https://image-search-60ni.onrender.com/api/search?query=${currentSearch}&page=${nextPage}&per_page=15`;
    }

    let result = await axios.get(newURL);
    setData(data.concat(result.data.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          if (input === "") {
            search(initialURL);
          } else {
            search(searchURL);
          }
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {/* logical operator && */}
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>更多圖片</button>
      </div>
    </div>
  );
};

export default Home;
