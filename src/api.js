import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "27df4d6a25cf0432fde7a1c946aa2b6c",
    language: "ko-KR"
  }
});

export default api;