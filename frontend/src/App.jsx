/* eslint-disable react/prop-types */
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import HomePage from './pages/Home/HomePage.jsx';
import Login from "./pages/Login/Login.jsx";
import LocationPage from "./pages/Location/LocationPage.jsx";
import LocationDetailsPage from "./pages/LocationDetails/LocationDetailsPage.jsx";
import ViewReservationsPage from "./pages/ViewReservationsPage/ViewReservationsPage.jsx";
import CreateListingPage from "./pages/CreateListingPage/CreateListingPage.jsx";
import ViewListingPage from "./pages/ViewListingPage/ViewListingPage.jsx";
import UpdateListingPage from "./pages/UpdateListingPage/UpdateListingPage.jsx"

const getUserRole = () => localStorage.getItem("role");
const isAuthenticated = () => !!localStorage.getItem("token");

const AdminRoute = ({ children }) => {
  return isAuthenticated() && getUserRole() === "host" ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path='/locations/:location' element={<LocationPage />} />
        <Route path="/listing/:id" element={<LocationDetailsPage />} />
        <Route path='/view-reservations' element={<ViewReservationsPage />} />
        <Route path='/create-listing' element={<AdminRoute><CreateListingPage /></AdminRoute>} />
        <Route path='/view-listings' element={<AdminRoute><ViewListingPage /></AdminRoute>} />
        <Route path="/update-listing/:id" element={<AdminRoute><UpdateListingPage /></AdminRoute>} />
      </Routes>
    </Router>
)
}

export default App
