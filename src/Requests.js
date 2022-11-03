const key = '1ac45d481ae36815a9ad7f423ef9168a'

const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/trending/moovie/week?api_key=${key}`,
    requestRomance: `https://api.themoviedb.org/3/search/tv?api_key=${key}&language=en-US&page=1&include_adult=false`,
}

export default requests;