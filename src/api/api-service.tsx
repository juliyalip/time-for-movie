import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";

export const getTrendingMovie = async () => {
  try {
    const { data: results } = await axios.get(
      `${baseURL}trending/movie/day?api_key=`
    );
    return results.results;
  } catch (err) {
    console.log(err);
  }
};

export const findMovie = async (movie: string) => {
  try {
    const { data: results } = await axios.get(
      `${baseURL}/search/movie?query=${movie}&api_key=`
    );
    return results.results;
  } catch (err) {
    console.log(err);
  }
};
