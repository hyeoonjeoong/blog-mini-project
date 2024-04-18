import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPostingDetail } from "../apis/blog";

const PostingDetail = () => {
  const location = useLocation();
  const state = location.state;

  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostingDetail(state.postingId)
      .then((res) => {
        console.log(res);
        setPost(res);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(state);
  return (
    <>
      <h2>PostingDetail</h2>
      <div>
        {post && (
          <>
            <div>title: {post.title}</div>
            <hr />
            <div>profileImg: {post.user.profileImg}</div>
            <div>nickname: {post.user.nickname}</div>
            <hr />
            <div>content: {post.content}</div>
            <hr />
            <div>🩵 {post.like}</div>
          </>
        )}
      </div>
    </>
  );
};

export default PostingDetail;
