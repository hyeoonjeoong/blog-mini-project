import axios from "axios";

export const getPostingLists = async () => {
  try {
    const res = await axios.get("/json/postingData.json");
    // console.log(res.data.postings);
    return res.data.postings;
  } catch (err) {
    console.log(err);
  }
};

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
