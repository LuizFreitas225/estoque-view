import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8085",
});

export default {
  search(searchTerm = "") {
    return api.get("/product/?searchTerm=" + searchTerm);
  },
};
