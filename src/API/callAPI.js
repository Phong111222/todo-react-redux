import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos";
const callAPI = () => {
  return axios.get(url);
};
export default callAPI;
