import axios from "axios";
const baseUrl = "http://localhost:3000/api/comments";

const create = (newObject, post_id) => {
  console.log(" Jdfhjskfjasdfkjasdljadsjldasfjla");
  const auth_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxpc2EzNjQwNUBnbWFpbC5jb20iLCJpZCI6IjVmN2Y1MjVkNTZiOTgzNWIyNDVlOGFhZiIsImV4cCI6MTYwNzYxNzQ4NywiaWF0IjoxNjAyNDMzNDg3fQ.xniUrdSGgfPDBXX6AJ-NmRKWkQHk5sPA4HZbTZ16C0A";
  const request = axios({
    method: "post",
    url: `${baseUrl}?post_id=${post_id}`,
    headers: {
      "Content-Type": "application/json",
      token: localStorage.getItem("token"),
    },
    withCredentials: true,
    data: newObject,
  });
  console.log(request.then((response) => response.data));
  console.log('t est');
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const deleteObj = (id) => {
  const request = axios({
    method: "delete",
    url: `${baseUrl}/${id}`,
    headers: {
      "token": localStorage.getItem("token")  
    },
    withCredentials: true,
  });
  return request.then((response) => response.data);
};

export default { create, update, deleteObj };
