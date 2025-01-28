/* eslint-disable react/no-unescaped-entities */
import './HomePage.css'
import HomeNav from '../../components/Nav/HomeNav'
import { Button, Card, CardActionArea, CardContent, CardMedia } from '@mui/material'
import Footer from '../../components/Footer/Footer'

const HomePage = () => {
  return (
    <>  
      <div className="home-container">
        <HomeNav />
        <div className='hero-card'>
          <div className='hero-card-container'>
            <div className='hero-text-container'>
              <p className='hero-card-text'>Not sure where to go? Perfect.</p>
              <Button 
                className='hero-card-btn' 
                sx={{
                  color: 'black', 
                  backgroundColor: 'white', 
                  borderRadius: '50px',
                  padding: '16px 24px'
                }}
              >
                I'm Flexible
              </Button>  
            </div>
          </div>
        </div>
      </div>

      <div className='inspiration-container'>
        <div className='trip-inspo-container'>
            <p>Inspiration for your next trip</p>
            <div className='trip-inspo-cards'>
              <Card sx={{width:'324px', height:'444px', borderRadius:'8px'}}>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    height='200'
                    image='https://s3-alpha-sig.figma.com/img/d5c1/6cba/8bc1958720a3d767d19d62a93cd1ff30?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PI7npuBh9H8OiuNloj0wBrsiG4qOzKMSy9AIb3TPAOOR1gQF37sIFo~34evtglLWnpEuOH2CYEJGIISGCffu55JyMKG4pkfxHBYlfl7xEUxbKV3ux2Kkcl3s8KHfh5fR60Ruod~8uL5hYMfVwLqzXhsfdPoE03bEz5V1UFxuCMHK3ofldc6jqH9ppKFWKGvgfF85bqh7lvsZ9u5W0Ilpi5nTm-HoMpH4RoVAsw-pC0yL7mVudweE0IIjPGTRS~sPbVKztMhXavs3ihJ3ihqfQ54sX8MEICplGVfbLzY17gETK2GLWPj3zLwSUP88l58TzvZU5D-j4aftVukTCilezQ__'
                    alt='sandton-city-hotel'
                  />
                  <CardContent sx={{padding:'24px 16px 96px 16px', backgroundColor:'#cc2d4a', height:'244px'}}>
                    <p className='trip-inspo-card-title'>
                      Sandton City      Hotel
                    </p>
                    <p className='trip-inspo-card-subtitle'>
                      53 km away
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{width:'324px', height:'444px', borderRadius:'8px'}}>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    height='200'
                    image='https://s3-alpha-sig.figma.com/img/d1d5/8d1e/618cfa54b385b8498f4a61ba36fac91b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Af~OaxjPutdI2TYgRCa-UNG5LfNR5gRDTXbje2KPiFFMsjsdfyC7hxo4f5cQVOFjyDSSmHQYfZfkeTh3lRd-SXL9td8u0KzKMJv-kflAYDnIZ3B8egAmOI9VxfwuzVJNIIedfVXKG6H9bFKItu5bBFkrdbQHYal14YPOTqjbqmGw0iOHX~29aYgEa-5XE~AVBJ3q06jVii14fpFU9nk9gGXCHB62DZWqCJ6WQzkAO-nMag8DoeuD~43ChcnOWJrDHOCVXSlI981f-q35h9CEHtmFa7ZfzWNmXY~dVMjivGCqG~F43By6NdNFJA4BrvtaCGsCDRxjwiVRlmmfLi9FRQ__'
                    alt='joburg-city-hotel'
                  />
                  <CardContent sx={{padding:'24px 16px 96px 16px', backgroundColor:'#bc1a6e', height:'244px'}}>
                    <p className='trip-inspo-card-title'>
                      Joburg City      Hotel
                    </p>
                    <p className='trip-inspo-card-subtitle'>
                      168 km away
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{width:'324px', height:'444px', borderRadius:'8px'}}>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    height='200'
                    image='https://s3-alpha-sig.figma.com/img/9710/36bd/867b0c3b96f2536c3194012f4a8e6a35?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akC6LooXWY1m01k5BvsuRKBJaILjEJsFxSPoGG2ZgVAkpzDmnEclW8wS5T3EbEZwEZLxoXyQEF9SuMyq-tvyZpT4ZWZReH7FpcJi8gqwYIpLW7ZjCIxC1usV4BWI6ajRezspv2a9LF9XZGQ39tkROEjNQOCpdiHzIzhgAr8ZiGkICnvy0hN4Lxh7ezvWgcnvQB25SqpZqzvTONFOO-nx35dPm9SQWDVdmr50b2VrKQcy807sJ6R6NV1taOqdh9Ficm-ACwPkRzLprkJ9NrXU7zQ98M8rSkIclZSxMy3gxaF~qTYGJGi47XwZ4XHdGcTrjFR2I~GfbjFM3drrCjkc6Q__'
                    alt='woodmead-hotel'
                  />
                  <CardContent sx={{padding:'24px 16px 96px 16px', backgroundColor:'#de3151', height:'244px'}}>
                    <p className='trip-inspo-card-title'>
                      Woodmead      Hotel
                    </p>
                    <p className='trip-inspo-card-subtitle'>
                      48 km away
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Card sx={{width:'324px', height:'444px', borderRadius:'8px'}}>
                <CardActionArea>
                  <CardMedia 
                    component='img'
                    height='200'
                    image='https://s3-alpha-sig.figma.com/img/0e73/8a88/3f20a6ea5306e1bc71f44938a7c19e9b?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CWUp49pcCP-bXmgP9noVHyOl3hp9J3Ou5LD5TZQiAc5Sx9uEwgk5Gzrx2ZB7vIIHs~LStcsN5LrI3PPR2ghFDOUV6cydaj~z3m0QIVfm9gUB-Vt3Wl1vL-YJYyhSOdyMIJqlpRIwtLaDOoFKe8G0vIiwEZ1lrmv2eBqiSb5pbHZVY1v58Kvm6vM7hD9C6EMqcQG1zj9cmkxCXOpuZHATHlvnY68drrwFVd5PUMpnjnkWjbaeNEIp2RTeuTZTHn9K8wMUeEoMdxrvLroeBb7uE-o9uxjUvTDLM7gZjGBbz35yqksFojmcUr7L38KGY8mJVwJlhgPMZH9k019qJxMwkg__'
                    alt='hyde-park-hotel'
                  />
                  <CardContent sx={{padding:'24px 16px 96px 16px', backgroundColor:'#d93b30', height:'244px'}}>
                    <p className='trip-inspo-card-title'>
                      Hyde Park      Hotel
                    </p>
                    <p className='trip-inspo-card-subtitle'>
                      34 km away
                    </p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
        </div>
        <div className='discover-container'>
            <p>Discover Airbnb Experiences</p>
            <div className='discover-cards'>
              <div className='discover-card1'>
                <div className='discover-card-text-container'>
                  <p className='discover-card-text'>
                    Things to do
                    on your trip
                  </p>
                  <Button sx={{
                    padding:'16px 24px',
                    width:'142px',
                    borderRadius:'8px',
                    color:'#374151',
                    backgroundColor:'white'
                  }}>
                    Experiences
                  </Button>
                  </div>
                </div>
              <div className='discover-card2'>
                <div className='discover-card-text-container'>
                  <p className='discover-card-text'>
                    Things to do
                    from home
                  </p>
                  <Button sx={{
                    padding:'16px 24px',
                    width:'198px',
                    height:'56px',
                    borderRadius:'8px',
                    color:'#374151',
                    backgroundColor:'white'
                  }}>
                    Online Experiences
                  </Button>
                </div>
              </div>
            </div>
        </div>
        <div className='gift-cards-container'>
          <div className='gift-cards-text-container'>
            <p className='gift-cards-text'>
              Shop Airbnb
              gift cards
            </p>
            <Button 
              sx={{
                padding:'16px 24px',
                borderRadius:'8px',
                backgroundColor:'black',
                color:'white'
              }}
            >
              Learn more
            </Button>
          </div>
          <div className='gift-cards-img'>
            <img 
              src='https://s3-alpha-sig.figma.com/img/43b8/8762/e0a70df6eb554b492d0b7d2633a1ecb1?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f6Tpd3YvYebpQojss3xSIhEJBd1~170wZwqn5Ro1ZxsTZEpyQcY7LbaMAmrGtRipwavzNBBRUCZk~AfZXsySfUTKQ123AZ1SN3SF-efyEz~lnvIxM7NzjuHaxoD5~yT-Acka6HGOGfTpB6R-c-C-s7mEsiT6cSmFZ0cbJFmxSV6NW7qtKuEzjvvKhX9GeQFv2jWpyZJYq51fRuUMKPCesYxDb9tgYds5JCSrcmQ9o59KMo7QNiS0-fa8eHHdgqf3iakd1iGt7c7232LcTmmMaHbZcP86EpBswiaFtYU2BsZnblOXQyVU8Fw99xz4~w8X3AfLr5qnspa~spQVugu7BQ__'
              alt='gift-cards'
            />
          </div>
        </div>
        <div className='questions-container'>
          <div className='questions-text-container'>
              <p className='questions-text'>
                Questions
                about
                hosting?
              </p>
              <Button sx={{
                padding:'16px 24px',
                borderRadius:'8px',
                backgroundColor:'white',
                color:'black',
                height:'56px',
                width:'178px',
                ":hover":'background-color: #ff385c color: white'
              }}>
                Ask a Superhost
              </Button>
          </div>
        </div>
        <div className='prefooter-container'>
          <div className='prefooter-header'>
            <p className='prefooter-header-text'>
              Inspiration for future getaways
            </p>
            <div className='tabbar'>
              <div className='tabbar-text-container'>
                <p className='active-tabbar-text'>Destinations for arts & culture</p>
                <p>Destinations for outdoor adventure</p>
                <p>Mountain cabins</p>
                <p>Beach destinations</p>
                <p>Popular destinations</p>
                <p>Unique Stays</p>
              </div>
            </div>
          </div>
          <div className='prefooter-content-container'>
            <div className='prefooter-content'>
              <div className='prefooter-content-text'>
                <p className='content-title'>Phoenix</p>
                <p className='content-subtitle'>Arizona</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>Hot Springs</p>
                <p className='content-subtitle'>Arkansas</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>Los Angeles</p>
                <p className='content-subtitle'>California</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>San Diego</p>
                <p className='content-subtitle'>California</p>
              </div>
            </div>
            <div className='prefooter-content'>
              <div className='prefooter-content-text'>
                <p className='content-title'>San Francisco</p>
                <p className='content-subtitle'>California</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>Barcelona</p>
                <p className='content-subtitle'>Catalonia</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>Prague</p>
                <p className='content-subtitle'>Czechia</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>Washington</p>
                <p className='content-subtitle'>District of Columbia</p>
              </div>
            </div>
            <div className='prefooter-content'>
              <div className='prefooter-content-text'>
                <p className='content-title'>Keswick</p>
                <p className='content-subtitle'>England</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>London</p>
                <p className='content-subtitle'>England</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title'>Scarborough</p>
                <p className='content-subtitle'>England</p>
              </div>
              <div className='prefooter-content-text'>
                <p className='content-title-more'>Show more</p>                
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default HomePage