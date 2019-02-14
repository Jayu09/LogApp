import axios from "axios";
const userUrl = "api/users/";

export async function addUser(data) {
  const res = await axios.post(userUrl + "/register", data);
  if (res.data.token) {
    const token = res.data.token;
    localStorage.setItem("token", token);
  }
  return res.data;
}
export async function loginUser(data) {
  const res = await axios.post(userUrl + "/authentication", data);
  if (res.data) {
    const token = res.data.token;
    localStorage.setItem("token", token);
    console.log(token);
  }
  return res.data;
}
export async function logoutUser() {
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("token");
}
