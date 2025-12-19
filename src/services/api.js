const API_KEY = "c17eaf0";
const BASE_URL = "https://www.omdbapi.com/";

export const getPopularMovies = async () => {

  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=Batman`);
  const data = await response.json();
  
  return data.Search || []; 
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  
  return data.Search || [];
};