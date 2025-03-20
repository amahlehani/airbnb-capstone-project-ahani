/* eslint-disable react/no-unescaped-entities */
import "./HomePage.css";
import HomeNav from "../../components/Nav/HomeNav";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Footer from "../../components/Footer/Footer";
import HeroImg from "../../assets/hero-img.jpeg";
import DurbanCard from "../../assets/durban-card.jpeg";
import JoburgCard from "../../assets/joburg-card.jpeg";
import Woodmead from "../../assets/woodmead.jpeg";
import HydePark from "../../assets/hydepark.jpeg";
import ThingsToDo from "../../assets/things-to-do.jpeg";
import ThingsToDoHome from "../../assets/things-to-do-home.jpeg";
import GiftCards from "../../assets/gift-cards.jpeg";
import AskHost from "../../assets/ask-superhost.jpeg";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <HomeNav />
        <div className="hero-card">
          <div className="hero-card-container">
            <img src={HeroImg} alt="hero-img" />
            <div className="hero-text-container">
              <p className="hero-card-text">Not sure where to go? Perfect.</p>
              <Button
                className="hero-card-btn"
                sx={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "50px",
                  padding: "16px 24px",
                }}
              >
                I'm Flexible
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="inspiration-container">
        <div className="trip-inspo-container">
          <p>Inspiration for your next trip</p>
          <div className="trip-inspo-cards">
            <Card sx={{ width: "324px", height: "444px", borderRadius: "8px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={DurbanCard}
                  alt="sandton-city-hotel"
                />
                <CardContent
                  sx={{
                    padding: "24px 16px 96px 16px",
                    backgroundColor: "#cc2d4a",
                    height: "244px",
                  }}
                >
                  <Typography sx={{ fontSize: 36, color: "white" }}>
                    Sandton City Hotel
                  </Typography>
                  <Typography sx={{ fontSize: 18, color: "white" }}>
                    53 km away
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: "324px", height: "444px", borderRadius: "8px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={JoburgCard}
                  alt="joburg-city-hotel"
                />
                <CardContent
                  sx={{
                    padding: "24px 16px 96px 16px",
                    backgroundColor: "#bc1a6e",
                    height: "244px",
                  }}
                >
                  <Typography sx={{ fontSize: 36, color: "white" }}>
                    Joburg City Hotel
                  </Typography>
                  <Typography sx={{ fontSize: 18, color: "white" }}>
                    168 km away
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: "324px", height: "444px", borderRadius: "8px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={Woodmead}
                  alt="woodmead-hotel"
                />
                <CardContent
                  sx={{
                    padding: "24px 16px 96px 16px",
                    backgroundColor: "#de3151",
                    height: "244px",
                  }}
                >
                  <Typography sx={{ fontSize: 36, color: "white" }}>
                    Woodmead Hotel
                  </Typography>
                  <Typography sx={{ fontSize: 18, color: "white" }}>
                    48 km away
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ width: "324px", height: "444px", borderRadius: "8px" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={HydePark}
                  alt="hyde-park-hotel"
                />
                <CardContent
                  sx={{
                    padding: "24px 16px 96px 16px",
                    backgroundColor: "#d93b30",
                    height: "244px",
                  }}
                >
                  <Typography sx={{ fontSize: 36, color: "white" }}>
                    Hyde Park Hotel
                  </Typography>
                  <Typography sx={{ fontSize: 18, color: "white" }}>
                    34 km away
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="discover-container">
          <p>Discover Airbnb Experiences</p>
          <div className="discover-cards">
            <div className="discover-card1">
              <img src={ThingsToDo} alt="things-to-do-on-trip" />
              <div className="discover-card-text-container">
                <p className="discover-card-text">Things to do on your trip</p>
                <Button
                  sx={{
                    padding: "16px 24px",
                    width: "142px",
                    borderRadius: "8px",
                    color: "#374151",
                    backgroundColor: "white",
                  }}
                >
                  Experiences
                </Button>
              </div>
            </div>
            <div className="discover-card2">
              <img src={ThingsToDoHome} alt="things-to-do-home" />
              <div className="discover-card-text-container">
                <p className="discover-card-text">Things to do from home</p>
                <Button
                  sx={{
                    padding: "16px 24px",
                    width: "198px",
                    height: "56px",
                    borderRadius: "8px",
                    color: "#374151",
                    backgroundColor: "white",
                  }}
                >
                  Online Experiences
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="gift-cards-container">
          <div className="gift-cards-text-container">
            <p className="gift-cards-text">Shop Airbnb gift cards</p>
            <Button
              sx={{
                padding: "16px 24px",
                borderRadius: "8px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Learn more
            </Button>
          </div>
          <div className="gift-cards-img">
            <img src={GiftCards} alt="gift-cards" />
          </div>
        </div>
        <div className="questions-container">
          <img src={AskHost} alt="ask-superhost" />
          <div className="questions-text-container">
            <p className="questions-text">Questions about hosting?</p>
            <Button
              sx={{
                padding: "16px 24px",
                borderRadius: "8px",
                backgroundColor: "white",
                color: "black",
                height: "56px",
                width: "178px",
                ":hover": "background-color: #ff385c color: white",
              }}
            >
              Ask a Superhost
            </Button>
          </div>
        </div>
        <div className="prefooter-container">
          <div className="prefooter-header">
            <p className="prefooter-header-text">
              Inspiration for future getaways
            </p>
            <div className="tabbar">
              <div className="tabbar-text-container">
                <p className="active-tabbar-text">
                  Destinations for arts & culture
                </p>
                <p>Destinations for outdoor adventure</p>
                <p>Mountain cabins</p>
                <p>Beach destinations</p>
                <p>Popular destinations</p>
                <p>Unique Stays</p>
              </div>
            </div>
          </div>
          <div className="prefooter-content-container">
            <div className="prefooter-content">
              <div className="prefooter-content-text">
                <p className="content-title">Phoenix</p>
                <p className="content-subtitle">Arizona</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">Hot Springs</p>
                <p className="content-subtitle">Arkansas</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">Los Angeles</p>
                <p className="content-subtitle">California</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">San Diego</p>
                <p className="content-subtitle">California</p>
              </div>
            </div>
            <div className="prefooter-content">
              <div className="prefooter-content-text">
                <p className="content-title">San Francisco</p>
                <p className="content-subtitle">California</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">Barcelona</p>
                <p className="content-subtitle">Catalonia</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">Prague</p>
                <p className="content-subtitle">Czechia</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">Washington</p>
                <p className="content-subtitle">District of Columbia</p>
              </div>
            </div>
            <div className="prefooter-content">
              <div className="prefooter-content-text">
                <p className="content-title">Keswick</p>
                <p className="content-subtitle">England</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">London</p>
                <p className="content-subtitle">England</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title">Scarborough</p>
                <p className="content-subtitle">England</p>
              </div>
              <div className="prefooter-content-text">
                <p className="content-title-more">Show more</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
