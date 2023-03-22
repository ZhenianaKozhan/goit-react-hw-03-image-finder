import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33603912-7e8ee717ebd011b2a3cf395f5';

export const getGallery = (searchText, page) => {
  return axios.get(
    `${BASE_URL}?q=${searchText}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};
