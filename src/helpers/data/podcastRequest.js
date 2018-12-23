import axios from 'axios';
import apiKeys from '../apiKeys';

const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getPodcastData = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/podcasts.json`)
    .then((res) => {
      const podcasts = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          podcasts.push(res.data[key]);
        });
      }
      resolve(podcasts);
    })
    .catch(err => reject(err));
});

const deletePodcastData = podcastId => axios.delete(`${firebaseUrl}/podcasts/${podcastId}.json`);

const postPodcast = podcast => axios.post(`${firebaseUrl}/podcasts.json`, podcast);

const updatePodcast = (podcastId, isCompleted) => axios.patch(`${firebaseUrl}/podcasts/${podcastId}.json`, { isCompleted });

export default {
  getPodcastData,
  deletePodcastData,
  postPodcast,
  updatePodcast,
};
