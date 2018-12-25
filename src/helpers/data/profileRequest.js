import axios from 'axios';
import apiKeys from '../apiKeys';

const clientId = apiKeys.githubApi.client_id;
const clientSecret = apiKeys.githubApi.client_secret;

const getRequest = githubUsername => new Promise((resolve, reject) => {
  axios
    .get(`https://api.github.com/users/${githubUsername}?client_id=${clientId}&client_secret=${clientSecret}`)
    .then((result) => {
      resolve(result.data);
    })
    .catch(err => reject(err));
});

const getUserCommit = githubUsername => new Promise((resolve, reject) => {
  axios
    .get(`https://api.github.com/users/${githubUsername}/events/public`)
    .then((result) => {
      // console.log(result.data);
      // let commitsCount = 0;
      let pushEvent = result.data.filter(event => event.type === 'PushEvent');
      pushEvent = pushEvent.slice(0, 5);
      // commitsCount += pushEvent.payload.commits;
      console.log(pushEvent);
    })
    .catch(err => reject(err));
});

export default {
  getRequest,
  getUserCommit,
};
