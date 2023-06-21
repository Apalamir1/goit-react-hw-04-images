import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33612656-05dca074429c1b844fadcbf1e';

export default async function getImages(query, page) {
  const response = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response;
}
