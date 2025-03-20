import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../api/apiClient";
import AdminNav from "../../components/Nav/AdminNav";
import "./UpdateListingPage.css";

const UpdateListingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    description: "",
    price: "",
    type: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    amenities: [],
    enhancedCleaning: false,
    selfCheckIn: false,
    images: [],
  });

  const [newImages, setNewImages] = useState([]);

  useEffect(() => {
    if (!id) {
      console.error("Listing ID is missing");
      return;
    }

    console.log(`Fetching listing with ID: ${id}`);

    const fetchListing = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/accommodations/${id}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching listing details", error);
      }
    };
    fetchListing();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleImageChange = (e) => {
    setNewImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataObj = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formDataObj.append(key, JSON.stringify(value)); 
        } else {
          formDataObj.append(key, value);
        }
      });

      if (newImages.length > 0) {
        newImages.forEach((image) => {
          formDataObj.append("images", image);
        });
      } else {
        formDataObj.append("existingImages", JSON.stringify(formData.images)); 
      }

      await axios.put(
        `http://localhost:5000/api/accommodations/${id}`,
        formDataObj,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Listing updated successfully!");
      navigate("/view-listings");
    } catch (error) {
      console.error("Error updating listing:", error);
      alert("Failed to update listing. Try again!");
    }
  };

  return (
    <>
      <AdminNav />

      <div className="create-listing-container">
        <h1>Update Listing</h1>

        <div className="create-listing-form-container">
          <form className="create-listing-form1" onSubmit={handleSubmit}>
            <div className="listingtitle-container">
              <label>Listing Name</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="listinglocation-container">
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </div>

            <div className="listingdescription-container">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className="checkbox-options">
              <div className="checkbox-option">
                <input
                  type="checkbox"
                  name="enhancedCleaning"
                  checked={formData.enhancedCleaning}
                  onChange={handleChange}
                />
                <label>Enhanced cleaning</label>
              </div>

              <div className="checkbox-option">
                <input
                  type="checkbox"
                  name="selfCheckIn"
                  checked={formData.selfCheckIn}
                  onChange={handleChange}
                />
                <label>Self check-in</label>
              </div>
            </div>

            <div className="amenities-inputs">
              <div className="amenities-input">
                <label>Amenities</label>
                <input
                  type="text"
                  name="amenities"
                  className="amenities-list"
                  value={formData.amenities.join(" · ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      amenities: e.target.value.split(", "),
                    })
                  }
                />
              </div>
            </div>
          </form>

          <form className="create-listing-form2" onSubmit={handleSubmit}>
            <div className="label-input-container1">
              <div className="label-input">
                <label>Price</label>
                <input
                  type="text"
                  className="price-input"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className="label-input">
                <label>Type</label>
                <select
                  id="type-input"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                >
                  <option value="">Select type</option>
                  <option value="Entire Apartment">Entire apartment</option>
                  <option value="Private Room">Private room</option>
                  <option value="Shared Room">Shared room</option>
                </select>
              </div>
            </div>

            <div className="label-input-container2">
              <div className="label-input">
                <label>Guests</label>
                <input
                  type="number"
                  className="room-input"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>
              <div className="label-input">
                <label>Bedrooms</label>
                <input
                  type="number"
                  className="room-input"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                />
              </div>
              <div className="label-input">
                <label>Bathrooms</label>
                <input
                  type="number"
                  className="bath-input"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="image-update-container">
              <label>Current Images</label>
              <div className="image-preview">
                {formData.images.map((img, index) => (
                  <img key={index} src={img} alt="Listing" width="100px" />
                ))}
              </div>

              <label>Upload New Images</label>
              <input type="file" multiple onChange={handleImageChange} />
            </div>

            <button
              className="upload-image-btn"
              type="submit"
              onClick={() => navigate("/view-listings")}
            >
              Update listing
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateListingPage;
