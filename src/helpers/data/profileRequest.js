import axios from 'axios';
import { getUserName } from '../../components/Auth/Auth';
// import apiKeys from '../apiKeys';

// const firebaseUrl = apiKeys.firebaseConfig.databaseURL;
const getRequest = () => new Promise((resolve, reject) => {
  const userName = getUserName();
  axios
    .get(`https://api.github.com/users/${userName}`)
    .then((result) => {
      console.log(result.data);
      resolve(result.data);
    })
    .catch(err => reject(err));
});

// const username = () => {
//   authRequests.authenticate().then((result) => {
//     const x = result.additionalUserInfo.username.toString;
//     return x;
//     // getRequest(x);
//   }).catch(err => console.error('there was an error with auth', err));
// };

export default {
  getRequest,
};
