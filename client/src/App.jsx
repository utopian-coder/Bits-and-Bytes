import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import { UserContextProvider } from "./store/UserContext";
import ProfilePage from "./pages/ProfilePage";
import UpcomingFeaturesPage from "./pages/UpcomingFeaturesPage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import Courses from "./pages/Courses";
import CourseDetailsPage from "./pages/CourseDetails/CourseDetailsPage";

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
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<CourseDetailsPage />} />
          <Route path='/upcoming' element={<UpcomingFeaturesPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
