import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api",
  timeout:1000,
  headers: {
    "Content-type": "application/json"
  }
});
