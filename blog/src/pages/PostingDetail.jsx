import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPostingDetail } from "../apis/blog";
import userIcon from "../assets/user.png";

const PostingDetail = () => {
  const location = useLocation();
  const state = location.state;

  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostingDetail(state.postingId)
      .then((res) => {
        // console.log(res);
        setPost(res);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(state);
  return (
    <>
      <div className="postingDetailContainer">
        {post && (
          <>
            <div className="title">{post.title}</div>
            <hr />
            <div className="writerBox">
              <div>
                <img src={post.user.profileImg || userIcon} alt="img" />
              </div>
              <div>{post.user.nickname}</div>
            </div>
            <hr />
            <div className="detailContent">{post.content}</div>
            <hr />
            <div className="detailLike">🩵 {post.like}</div>
          </>
        )}
      </div>
    </>
  );
};

export default PostingDetail;
