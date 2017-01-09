import championsAPI from './api/championsAPI.jsx';
import KEY from './apikey.jsx';

const URL = 'https://global.api.pvp.net';


const API = {
    championsAPI: championsAPI(URL, KEY),
};

export default API;
