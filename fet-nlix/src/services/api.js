// Base da URL https://api.themoviedb.org/3/
// URL https://api.themoviedb.org/3/movie/now_playing?api_key=e09576ff057c4366522d6b9d11b37d68

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;
