
import * as axios from 'axios';

const championsAPI = (baseURL, apiKEY) => {
  return {
    getSimpleChampions: () => {
      return axios
        .get(`${baseURL}/api/lol/static-data/eune/v1.2/champion?api_key=${apiKEY}`);
    }
  }
}

export default championsAPI;
