import "./ViewListingPage.css";
import AdminNav from "../../components/Nav/AdminNav";
import axios from "../../api/apiClient";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";

const ViewListingPage = () => {
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token"); 

    if (!token) {
      setError("Unauthorized: Please log in.");
      setLoading(false);
      return;
    }

    axios
      .get("http://localhost:5000/api/accommodations/host/listings", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Fetched listing:", res.data);
        setListings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching listing:", error);
        setError("Error fetching listing details");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this listing?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`/accommodations/${id}`);
      setListings(listings.filter((listing) => listing._id !== id)); 
    } catch (error) {
      console.error("Error deleting listing:", error);
      alert("Failed to delete listing.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <AdminNav />

      <div className="viewlisting-container">
        <h1 className="viewlisting-container-title">My Listings</h1>

        <div className="viewlisting-items">
          {listings.map((listing) => (
            <div
              className="viewlisting-item"
              key={listing._id}
              onClick={() => navigate(`/listing/${listing._id}`)}
            >
              <div className="viewlisting-item-left">
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="viewlisting-image"
                />
                <div className="viewlisting-actions">
                  <button
                    className="viewlisting-update-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/update-listing/${listing._id}`);
                    }}
                  >
                    Update
                  </button>
                  <button
                    className="viewlisting-delete-btn"
                    onClick={() => handleDelete(listing._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="viewlisting-details">
                <p className="viewlisting-type">{listing.type}</p>
                <h2 className="viewlisting-title">{listing.title}</h2>
                <p className="viewlisting-info">
                  {listing.guests} guests · {listing.bedrooms} beds ·{" "}
                  {listing.bathrooms} bath
                </p>
                <p className="viewlisting-amenities">
                  {listing.amenities.join(" · ")}
                </p>

                <div className="viewlisting-footer">
                  <div className="viewlisting-rating">
                    {listing.rating}
                    <StarRateIcon
                      fontSize="small"
                      className="viewlisting-star"
                    />
                    <span>({listing.reviews} reviews)</span>
                  </div>
                  <p className="viewlisting-price">R {listing.price} /night</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ViewListingPage;
