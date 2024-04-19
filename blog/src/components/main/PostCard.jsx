import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostingLike } from "../../apis/blog";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [likeCount, setLikeCount] = useState(post.like);
  const [isFavorite, setIsFavorite] = useState(false);

  const clickPostCard = () => {
    navigate("/post/${props.postingId}", {
      state: { postingId: post.postingId },
    });
  };

  const clickLike = (post) => {
    getPostingLike(post.postingId).then((postingLike) => {
      setLikeCount(postingLike);
      console.log(likeCount);
      if (isFavorite === true) {
        post.like = likeCount;
      } else {
        post.like = likeCount + 1;
      }
      setIsFavorite(!isFavorite);
    });
  };
  return (
    <>
      <div className="postingCard">
        <div className="postingHeader">
          <div>title: {post.title}</div>
          <div
            onClick={() => clickLike(post)}
            style={{ color: isFavorite === true ? "#496989" : "#D6DAC8" }}
          >
            ♥ {post.like}
          </div>
        </div>
        <div className="postingBody" onClick={clickPostCard}>
          <div>content: {post.content}</div>
          <div>postingId: {post.postingId}</div>
        </div>
        <div className="postingFooter">
          <div>userId: {post.user.userId}</div>
          <div>nickname: {post.user.nickname}</div>
          <div>profileImg: {post.user.profileImg}</div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
