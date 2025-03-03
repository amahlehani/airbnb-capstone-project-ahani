import './CreateListingPage.css'
import AdminNav from '../../components/Nav/AdminNav'

const CreateListingPage = () => {
  return (
    <>
        <AdminNav />

        <div className='create-listing-container'>
            <h1>Create Listing</h1>

            <div className='create-listing-form-container1'>
                <form className='create-listing-form1'>
                    <label>Listing Name</label>
                    <input type='text' />
                    <label>Location</label>
                    <input type='text' />
                    <label>Description</label>
                    <textarea name='description'/>
                </form>

                <div className='create-listing-form-container2'>
                    <form className='create-listing-form2'>
                        <label>Room</label>
                        <input type='number' />
                        <label>Baths</label>
                        <input type='number' />
                        <label>Type</label>
                        <input type='text' className='type-input'/>
                    </form>
                </div>
                
            </div>
        </div>

    </>
  )
}

export default CreateListingPage