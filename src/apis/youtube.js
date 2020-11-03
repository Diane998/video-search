import axios from 'axios';

const KEY = 'AIzaSyB2Di1d7mbZLqjPwrSpdK17OBnzC655hS0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  },
});
