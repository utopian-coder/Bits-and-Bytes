import "./App.css";
import axios from "axios";

//Setting default rules for axios requests
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL; //http://127.0.0.1:4000/api/v1
axios.defaults.withCredentials = true; //For including cookies in request header

function App() {
  return <div>Bits and Bytes</div>;
}

export default App;
