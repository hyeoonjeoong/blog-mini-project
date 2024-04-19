import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPostingLists } from "../../apis/blog";

const MainPostBox = () => {
  const [postingList, setPostingList] = useState([]);

  useEffect(() => {
    getPostingLists()
      .then((res) => {
        setPostingList(res);
        //console.log("postingList", res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {postingList.length === 0 ? (
        <p>포스팅 내용이 존재하지 않습니다.</p>
      ) : (
        <div className="mainPostBox">
          {postingList.map((post) => (
            <PostCard key={post.postingId} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default MainPostBox;
