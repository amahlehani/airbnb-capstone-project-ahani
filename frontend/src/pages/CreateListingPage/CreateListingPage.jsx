import './CreateListingPage.css'
import AdminNav from '../../components/Nav/AdminNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const CreateListingPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        description: '',
        price: '',
        type: '',
        guests: '',
        bedrooms: '',
        bathrooms: '',
        amenities: [],
        enhancedCleaning: false,
        selfCheckIn: false
    });

    const [selectedImages, setSelectedImages] = useState([]);
    const [amenityInput, setAmenityInput] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === 'checkbox') {
          setFormData({ ...formData, [name]: checked });
        } else {
          setFormData({ ...formData, [name]: value });
        }
    };

    const handleAddAmenity = (e) => {
        e.preventDefault();
        if (amenityInput.trim() !== '') {
          setFormData({ ...formData, amenities: [...formData.amenities, amenityInput] });
          setAmenityInput('');
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files); 
        setSelectedImages(files);
    };

    const validateInputs = () => {
        let newErrors = {};
        if (!formData.title) newErrors.title = "Title is required";
        if (!formData.location) newErrors.location = "Location is required";
        if (!formData.description) newErrors.description = "Description is required";
        if (!formData.price || isNaN(formData.price) || formData.price <= 0) newErrors.price = "Valid price is required";
        if (!formData.type) newErrors.type = "Type is required";
        if (!formData.guests || formData.guests <= 0) newErrors.guests = "At least 1 guest required";
        if (!formData.bedrooms || formData.bedrooms <= 0) newErrors.bedrooms = "At least 1 bedroom required";
        if (!formData.bathrooms || formData.bathrooms <= 0) newErrors.bathrooms = "At least 1 bathroom required";
        if (selectedImages.length === 0) newErrors.images = "At least one image is required";
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!validateInputs()) return;
    
        try {
            const formDataObj = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (Array.isArray(value)) {
                    formDataObj.append(key, JSON.stringify(value));
                } else {
                    formDataObj.append(key, value);
                }
            });
    
            // Append multiple images
            selectedImages.forEach((image) => {
                formDataObj.append("images", image); // Correct field name
            });
    
            await axios.post("http://localhost:5000/api/accommodations", formDataObj, {
                headers: { "Content-Type": "multipart/form-data" },
            });
    
            alert("Listing created successfully!");
            navigate("/view-listings");
    
        } catch (error) {
            console.error("Error creating listing:", error);
            alert("Failed to create listing. Try again!");
        }
    };
  return (
    <>
        <AdminNav />

        <div className='create-listing-container'>
            <h1>Create Listing</h1>

            <div className='create-listing-form-container'>
                <form className='create-listing-form1' onSubmit={handleSubmit}>
                    <div className='listingtitle-container'>
                        <label>Listing Name</label>
                        <input type='text'  name="title" value={formData.title} onChange={handleChange}/>
                        {errors.title && <p className="error">{errors.title}</p>}
                    </div>

                    <div className='listinglocation-container'>
                        <label>Location</label>
                        <input type='text' name="location" value={formData.location} onChange={handleChange}/>
                        {errors.location && <p className="error">{errors.location}</p>}
                    </div>

                    <div className='listingdescription-container'>
                        <label>Description</label>
                        <textarea name='description' value={formData.description} onChange={handleChange} />
                        {errors.description && <p className="error">{errors.description}</p>}
                    </div>

                    <div className='checkbox-options'>
                        <div className='checkbox-option'>
                            <input type='checkbox' name='enhancedCleaning' checked={formData.enhancedCleaning} onChange={handleChange} />
                            <label>Enhanced cleaning</label> 
                        </div>

                        <div className='checkbox-option'>
                            <input type='checkbox' name='selfCheckIn' checked={formData.selfCheckIn} onChange={handleChange} />
                            <label>Self check-in</label> 
                        </div>
                    </div>

                    <div className='amenities-inputs'>
                        <div className='amenities-input'>
                            <label>Amenities</label>
                            <input type='text' className='amenities-list' value={amenityInput} onChange={(e) => setAmenityInput(e.target.value)} />
                        </div>
                        <button className='amenities-add-btn' onClick={handleAddAmenity}>Add</button>
                    </div>

                    <ul>
                        {formData.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                    ))}
            </ul>
                </form>

                <form className='create-listing-form2' onSubmit={handleSubmit}>
                    <div className='label-input-container1'>
                        <div className='label-input'>
                            <label>Price</label>
                            <input type='text' className='price-input' name="price" value={formData.price} onChange={handleChange}/>
                            {errors.price && <p className="error">{errors.price}</p>}
                        </div>

                        <div className='label-input'>
                            <label>Type</label>
                            <select id='type-input' name='type' value={formData.type} onChange={handleChange}>
                                <option value="">Select type</option>
                                <option value="Entire Apartment">Entire apartment</option>
                                <option value="Private Room">Private room</option>
                                <option value="Shared Room">Shared room</option>
                            </select>
                            {errors.type && <p className="error">{errors.type}</p>}
                        </div>
                    </div>

                    <div className='label-input-container2'>
                        <div className='label-input'>
                            <label>Guests</label>
                            <input type='number' className='room-input' name="guests" value={formData.guests} onChange={handleChange}/>
                        </div>
                        <div className='label-input'>
                            <label>Bedrooms</label>
                            <input type='number' className='room-input' name="bedrooms" value={formData.bedrooms} onChange={handleChange}/>
                        </div>
                        <div className='label-input'>
                            <label>Bathrooms</label>
                            <input type='number' className='bath-input' name="bathrooms" value={formData.bathrooms} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className='image-upload-container'>
                        <input type='file' multiple onChange={handleImageChange}/>
                        {errors.images && <p className="error">{errors.images}</p>}
                    </div>

                    <button className='upload-image-btn'>
                        Upload images
                    </button>

                    <div className='submit-form-btns'>
                        <button className='create-btn'>
                            Create
                        </button>
                        <button className='cancel-btn' onClick={() => navigate('/view-listings')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>

    </>
  )
}

export default CreateListingPage