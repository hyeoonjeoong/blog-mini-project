import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPostingDetail } from "../apis/blog";
import userIcon from "../assets/user.png";
import LoadThumbnail from "../components/common/LoadThumbnail";

const PostingDetail = () => {
  const location = useLocation();
  const state = location.state;

  const [post, setPost] = useState(null);

  useEffect(() => {
    console.log(state);
  }, []);
  useEffect(() => {
    getPostingDetail(state.postingId)
      .then((res) => {
        console.log(res);
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
            <div className="postingHeader">
              <div className="thumbnail">
                <LoadThumbnail />
              </div>
              <div className="title">{post.title}</div>
            </div>

            <div className="writerBox">
              <div>
                <img src={post.user.profileImg || userIcon} alt="img" />
              </div>
              <div>{post.user.nickname}</div>
            </div>
            <div className="detailContent">{post.content}</div>
            <div className="detailLike">
              <button> ♥ {post.like}</button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PostingDetail;
