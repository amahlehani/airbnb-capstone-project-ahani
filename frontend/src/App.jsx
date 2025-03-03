/* eslint-disable react/prop-types */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from './pages/Home/HomePage.jsx';
import Login from "./pages/Login/Login.jsx";
import LocationDetailsPage from "./pages/LocationDetails/LocationDetailsPage.jsx";
import ViewReservationsPage from "./pages/ViewReservationsPage/ViewReservationsPage.jsx";
import CreateListingPage from "./pages/CreateListingPage/CreateListingPage.jsx";
import SearchListingPage from "./pages/SearchListingPage/SearchListingPage.jsx";

const getUserRole = () => localStorage.getItem("role");
const isAuthenticated = () => !!localStorage.getItem("token");

const AdminRoute = ({ children }) => {
  return isAuthenticated() && getUserRole() === "admin" ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/listing" element={<LocationDetailsPage />} />
        <Route path='/reservation' element={<ViewReservationsPage />} />
        <Route path='/create-listing' element={<AdminRoute><CreateListingPage /></AdminRoute>} />
        <Route path='/search-listing' element={<SearchListingPage />} />
      </Routes>
    </Router>
)
}

export default App
