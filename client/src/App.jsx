import "./App.css";
import axios from "axios";
import Header from "./components/Layout/Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { UserContextProvider } from "./store/UserContext";

//Setting default rules for axios requests
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL; //http://127.0.0.1:4000/api/v1
axios.defaults.withCredentials = true; //For including cookies in request header

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='log-in' element={<LogInPage />} />
          <Route path='sign-up' element={<SignUpPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
