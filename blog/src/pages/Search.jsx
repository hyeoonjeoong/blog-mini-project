import React, { useEffect, useState } from "react";
import { searchPosting } from "../apis/blog";
import PostCard from "../components/main/PostCard";

const Search = () => {
  const [searchParams, setSearchParams] = useState("");
  const [postingList, setPostingList] = useState([]);

  const handleSearch = () => {
    if (!searchParams) {
      alert("검색 내용을 입력해주세요.");
      return;
    }
    searchPosting(searchParams)
      .then((res) => {
        setPostingList(res);
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
              placeholder="검색어를 입력하세요."
            ></input>
            <button onClick={handleSearch}>검색하기</button>
          </div>
        </div>
      </div>
      <div className="searchPostBox">
        {postingList.map((post) => (
          <PostCard key={post.postingId} post={post} />
        ))}
      </div>
    </>
  );
};

export default Search;
