import axios from "axios";

const BaseURL = "127.0.0.1:8000/api";

function Axios(url) {
  return axios(`${BaseURL}/${url}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

export default Axios;
