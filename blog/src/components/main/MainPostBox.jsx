import React from "react";
import PostCard from "./PostCard";

const DUMMYPosting = [
  {
    postingId: 1,
    like: 2,
    title: "포스팅 제목임",
    content: "블로그 프로젝트입니다. ",
    user: {
      userId: 1,
      nickname: "Happy Cookie",
      profileImg: null,
    },
  },
  {
    postingId: 2,
    like: 20,
    title: "포스팅 제목제목",
    content: "근데 연습이라서 간단하게",
    user: {
      userId: 1,
      nickname: "Happy Cookie",
      profileImg: null,
    },
  },
  {
    postingId: 3,
    like: 5,
    title: "이건 포스팅 타이틀",
    content: "어떠케할까",
    user: {
      userId: 2,
      nickname: "모카는 고양이",
      profileImg: null,
    },
  },
];

const MainPostBox = () => {
  return (
    <>
      {DUMMYPosting.length === 0 ? (
        <p>포스팅 내용이 존재하지 않습니다.</p>
      ) : (
        <div className="mainPostBox">
          {DUMMYPosting.map((post) => (
            <PostCard key={post.postingId} post={post} />
          ))}
        </div>
      )}
    </>
  );
};

export default MainPostBox;
