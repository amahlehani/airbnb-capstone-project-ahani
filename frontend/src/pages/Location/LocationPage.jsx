import "./LocationPage.css";
import { useNavigate, useParams } from "react-router-dom";
import SearchNav from "../../components/Nav/SearchNav";
import StarRateIcon from "@mui/icons-material/StarRate";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useEffect, useState } from "react";
import axios from "../../api/apiClient";

const LocationPage = () => {
  const navigate = useNavigate();
  const { location } = useParams();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredListings, setFilteredListings] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/accommodations?location=${location}`)
      .then((res) => {
        console.log("Fetched listings:", res.data); 
        setListings(res.data);
        setLoading(false);
        setFilteredListings(res.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Error fetching listings:",
          error.response ? error.response.data : error.message
        );
        setError("Error fetching listings");
        setLoading(false);
      });
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="div">
      <SearchNav />

      <div className="viewlisting-container">
        <h1 className="viewlisting-container-title">
          {filteredListings.length} stays in {location || "All locations"}
        </h1>

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
              </div>

              <div className="viewlisting-details locationlisting-details">
                <p className="viewlisting-type">{listing.type}</p>
                <h2 className="viewlisting-title">
                  {listing.title}
                  <FavoriteBorderOutlinedIcon
                    fontSize="small"
                    className="viewlisting-heart"
                  />
                </h2>
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
    </div>
  );
};

export default LocationPage;
