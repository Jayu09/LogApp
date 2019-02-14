import axios from "axios";
const commentUrl = "api/comments/";

export async function newComment(data) {
  const comment = data.payload;
  const token = localStorage.getItem("token");
  const res = await axios.post(commentUrl, { comment, token });
  return res.data;
}

export async function removeComment(data) {
  const payload = data.payload;
  const token = localStorage.getItem("token");
  const res = await axios.post(commentUrl + "/delete", { payload, token });
  return res.data;
}

export async function getComments() {
  const res = await axios.get(commentUrl);
  return res.data;
}
