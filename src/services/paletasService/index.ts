import api from '../api';
const findAllService = {
  allPaletas: () =>
    api
      .get('/all-paletas')
      .then((response: any) => response)
      .catch((error: any) => console.log(error)),
};

export { findAllService };
