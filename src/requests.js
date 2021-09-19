const API_KEY = "bcb8eea72caef639a9172bd1babbf46f"; 

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres99`,
}

export default requests;