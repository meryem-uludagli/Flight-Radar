import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "c7ad3a1f0dmsh93d1a5f5f25a157p167b37jsn96949fa914e8",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
