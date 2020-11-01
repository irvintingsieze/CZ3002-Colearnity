import axios from "axios";
const baseUrl = "http://localhost:3000/api/search"; 

const searchPost = (keyword) => {
  const request = axios.get(`${baseUrl}/post?postKeyword=${keyword}`);
  console.log(`${baseUrl}?postKeyword=${keyword}`);
  return request.then((response) => response.data);
};

const searchForum = (keyword) => {
    const request = axios.get(`${baseUrl}/forum?forumKeyword=${keyword}`);
    return request.then((response) => response.data);
};


export default {
  searchPost, searchForum,
};
