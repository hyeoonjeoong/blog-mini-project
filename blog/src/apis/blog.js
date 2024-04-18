import axios from "axios";

export const getPostingLists = async () => {
  try {
    const res = await axios.get("/json/postingData.json");
    console.log(res.data.postings);
    return res.data.postings;
  } catch (err) {
    console.log(err);
  }
};
