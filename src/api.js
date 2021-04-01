import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: "27df4d6a25cf0432fde7a1c946aa2b6c",
    language: "ko-KR"
  }
});

export const movieApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upComing: () => api.get("/movie/upcoming"),
  popular: () => api.get("/movie/popular")
};

export const tvApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  airingToday: () => api.get("/tv/airing_today")
};

