import axios from "axios";

//포스트 전체 목록 가져오기
export const getPostingLists = async () => {
  try {
    const res = await axios.get("/json/postingData.json");
    // console.log(res.data.postings);
    return res.data.postings;
  } catch (err) {
    console.log(err);
  }
};

//포스트 상세 페이지 내용 가져오기
export const getPostingDetail = async (postingId) => {
  try {
    const res = await axios.get("/json/postingData.json");
    const postings = res.data.postings;
    const posting = postings.find((post) => post.postingId === postingId);
    //console.log(posting);
    return posting;
  } catch (err) {
    console.log(err);
  }
};

//포스트 좋아요 개수 가져오기
export const getPostingLike = async (postingId) => {
  try {
    const res = await axios.get("/json/postingData.json");
    const postings = res.data.postings;
    const posting = postings.find((post) => post.postingId === postingId);
    // console.log(posting);
    const postingLike = posting ? posting.like : null;
    // console.log(postingLike);
    return postingLike;
  } catch (err) {
    console.log(err);
  }
};
