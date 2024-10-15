import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "347cc4592a66438d998232d737ee3ed4",
  },
});
