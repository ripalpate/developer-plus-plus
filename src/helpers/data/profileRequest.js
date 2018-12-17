import axios from 'axios';
// import { getUserName } from '../../components/Auth/Auth';

const getRequest = () => new Promise((resolve, reject) => {
  // const userName = getUserName();
  // console.log(userName)
  axios
    .get('https://api.github.com/users/ripalpate')
    .then((result) => {
      resolve(result.data);
    })
    .catch(err => reject(err));
});

export default {
  getRequest,
};
