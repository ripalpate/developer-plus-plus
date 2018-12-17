import axios from 'axios';
// import { getUserName } from '../../components/Auth/Auth';

const getRequest = () => new Promise((resolve, reject) => {
  // const userName = getUserName();
  // console.log(userName)
  axios
    .get('https://api.github.com/users/ripalpate?client_id=cf9eef556d64c9e012a0&client_secret=70595b4b02454f45a42ad273047d3500751bb633')
    .then((result) => {
      const profile = [];
      profile.push(result.data);
      console.log(profile);
      resolve(profile);
    })
    .catch(err => reject(err));
});

export default {
  getRequest,
};
