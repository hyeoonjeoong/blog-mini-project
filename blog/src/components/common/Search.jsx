import React, { useEffect, useState } from "react";
import { searchPosting } from "../../apis/blog";

const Search = () => {
  const [searchParams, setSearchParams] = useState("");

  const handleSearch = () => {
    if (!searchParams) {
      alert("검색 내용을 입력해주세요.");
      return;
    }
    searchPosting(searchParams)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setSearchParams("");
  };

  return (
    <>
      <div className="searchBoxWrapper">
        <div className="searchBoxContainer">
          <div className="searchBox">
            <input
              className="searchInput"
              type="text"
              value={searchParams}
              onChange={(e) => setSearchParams(e.target.value)}
            ></input>
            <button onClick={handleSearch}>검색하기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
