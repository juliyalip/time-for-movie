import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovie = async () => {
  try {
    const {data: results}= await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=");
  return results.results
  } catch (err) {
    console.log(err);
  }
};
