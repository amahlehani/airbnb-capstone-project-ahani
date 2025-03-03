import './LocationDetailsPage.css'
import ListingsNav from "../../components/Nav/ListingsNav"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import GridViewIcon from '@mui/icons-material/GridView'
import { Avatar, Badge } from '@mui/material'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'



const LocationDetailsPage = () => {
  return (
    <>
        <ListingsNav />
        <div className='listings-section'>
            <div className='listings-header'>
                <p>Bordeaux Getaway</p>
                <div className='listings-header-details'>
                    <div className='header-details-left'>
                        <div className='header-rating'>
                            <StarBorderOutlinedIcon fontSize='small' className='header-star' />
                            <p>5.0</p>
                        </div>
                        <p>&bull;</p>
                        <div className='header-review-number'>
                            <p>7 reviews</p>
                        </div>
                        <p>&bull;</p>
                        <div className='header-host-badge'>
                            <MilitaryTechOutlinedIcon fontSize='small' className='header-star' />
                            <p>Superhost</p>
                        </div>
                        <p>&bull;</p>
                        <div className='header-location'>
                            <p>Bordeaux, France</p>
                        </div>
                    </div>
                    <div className='header-details-right'>
                        <div className='header-share'>
                            <OpenInNewOutlinedIcon fontSize='small' />
                            <p>Share</p>
                        </div>
                        <div className='header-save'>
                            <FavoriteBorderOutlinedIcon fontSize='small' />
                            <p>Save</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listings-image-container'>
                <div className='big-img-container'>
                    <img src='../../assets/listing-big-img.png' alt='listing-img' />
                </div>
                <div className='small-img-container'>
                    <div className='small-img-row1'>
                        <img src='https://s3-alpha-sig.figma.com/img/7e95/b547/ccb35f41cb8bca5561addab0467b9ce5?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f3grlJufJZ7FmnLz~28jXFAtKR0ckrHZHsnhbqxdC8pD3Vsrwu~UjDWM12GOFanP275s-~VzA7yiJaDAfIBPKEjnarA70U~URj-JR4VO7RLXOAEZCNGtwL5JxCnJTrsLHlBFiIdw8Igp5P0Ht8GEtTDuaL-Yb82mgm9NL5duJsbP45df-jF5R8c~UuwBiwvzTWzl3jdKXYHq2vsoAYhwy~r5oBqFtg0AxRDIW-U7CEkign5Tt5CbxUIsMVuozAEcwa6sztOLipy-bqtRRrVLW6yemc5GGWYYqqTAa3StQcHbPSbrH2bjJ8FYRFQ2VxhBkZ4MBglG~jPLBbUb5uTSQQ__' alt='listing-img' />
                        <img src='https://s3-alpha-sig.figma.com/img/9c03/7428/fcc8ee64fe9d947569d78c1eb2e26259?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eeYSvSueZDO4sE~nL3RGtDGUTUQRTPTba5JbFFL~fxjjiNTaoNvHJEUfi6s7ObjlrZK0ck~tbpUS1EghsFCsTKntTYIs8EZf447YDrxtwCD16KIpyeSQnLn6sYoUfTWY7csCt~Whulss8oY1U02R~U6zJQgE5Tk0Qd2WbbT5m5oYJBZhouxF~fN6QbYNCiOd3eco-8g7JF1bvAEIrDv04eHS2cWMaIU5AGMUPxy~EIYEokVEFTqOpQ36wDWfv84YUUz~EF4~2-bSVKGPtTlWODnvlHzhMCCkmBcqM-Lxrwhqlpr6ff1rZZ671OgmLZT410W0Bys-zl1ZLy4qhxF~CA__' alt='listing-img' className='top-radius' />
                    </div>
                    <div className='small-img-row2'>
                        <img src='https://s3-alpha-sig.figma.com/img/079e/23bf/4bb90ff22235b7665fc3ca85d2c34b28?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YWDadS~mNcY~RgGiAeqVl2A25Dq-SwhMidl6J188Z7q8P5NP0qEhhc-BooGIpqIl7HZnbktG6uJ5SH1OhH0Cd93fjFAZ3WD8VUQk8xoD3XXBctF187sE0ubFBo9AXcBud34PVWkPgMTeZl0cVLuo8-v7C2d6B~hyWLmOol3uTAm1WK4eptYacesLSjESuB3UR-G~wYPQPCtS0uaSMSvnpDKRN-VYlJPyhU-AGO34pHB-YfafbMuer3nWBaXEMpenv5SK6k~Rd-790VSKjYAsKgGGwWHYmmFjOMwIzzvbyGi6KJSL5OM7qkuq2Qs3Oa~5g~rzvf4B25iU-KNSv4BQgw__' alt='listing-img' />
                        <div className='img-see-more'>
                            <img src='https://s3-alpha-sig.figma.com/img/5297/e89b/bda05c1478e165e64250f76d43531d98?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pxnt9ofo29MGceoRs0qNZuPdUNY9LIDJhJC7ShW~C3hg3D22vWmwawAHvVSRymHu4waiMJnRPWawDa~W1arpCpsw7FQRCoTXh2ItDyD3j7gK8hiMKQwZomd0nsdUYuTgcsCGLOYgBBvoSVIxK6qHdjemHWCoPwf-n77InC6-Pg5KXlZJKlV5AwJWlNp6MgA-E22JAAgY6J46MdLqIVW~1y6xUZ6-ELHDZ0ceCgKR5KHfR8hk6sCQeRaUgM5ObwUGdM2GMBCwFjvM2MHhauccVBCB~abjS9S84m3daUNPM2Mz6VUiKFPXyykZA0OCgf9oMXrimN8fI2sj27yjpYgEwQ__' alt='listing-img' className='bottom-radius' />
                            <button>
                                <GridViewIcon fontSize='small' /> Show all photos
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='listing-details-container'>
                <div className='listing-details-left'>
                    <div className='listing-detail-top'>
                        <div className='listing-detail-header'>
                            <div className='listing-detail-title'>
                                <p>Entire rental unit hosted by Ghazal</p>
                                <div className='title-details'>
                                    <p>2 guests</p>
                                    <p>&bull;</p>
                                    <p>1 bedroom</p>
                                    <p>&bull;</p>
                                    <p>1 bed</p>
                                    <p>&bull;</p>
                                    <p>1 bath</p>
                                </div>
                            </div>
                            <div className='listing-detail-avatar'>
                                <Badge
                                    overlap="circle"
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                    badgeContent={
                                        <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.1865 1.30513C15.1865 0.977508 14.9209 0.711914 14.5933 0.711914H1.30513C0.977508 0.711914 0.711914 0.977508 0.711914 1.30513V11.5801C0.711914 11.7599 0.793457 11.93 0.933629 12.0426L7.57769 17.3796C7.79469 17.5539 8.10371 17.5539 8.32071 17.3796L14.9648 12.0426C15.1049 11.93 15.1865 11.7599 15.1865 11.5801V1.30513Z" fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.30508 0H14.5932C15.314 0 15.8983 0.584306 15.8983 1.30508V11.58C15.8983 11.9756 15.7189 12.3498 15.4105 12.5975L8.76646 17.9345C8.28906 18.318 7.60924 18.318 7.13184 17.9345L0.487773 12.5975C0.179394 12.3498 0 11.9756 0 11.58V1.30508C0 0.584306 0.584306 0 1.30508 0ZM14.5932 0.711864C14.9208 0.711864 15.1864 0.977458 15.1864 1.30508V11.58C15.1864 11.7598 15.1049 11.9299 14.9647 12.0425L8.32066 17.3795C8.10366 17.5539 7.79465 17.5539 7.57765 17.3795L0.93358 12.0425C0.793407 11.9299 0.711864 11.7598 0.711864 11.58V1.30508C0.711864 0.977458 0.977458 0.711864 1.30508 0.711864H14.5932Z" fill="black"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M1.42411 11.5252L14.3804 1.54248V11.5252L14.3802 11.5252L7.90204 16.7289L1.42391 11.5252H1.42411Z" fill="#F5BF41"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.3803 11.5252L1.42407 1.54248V11.5252L1.42416 11.5252L7.90228 16.7289L14.3804 11.5252H14.3803Z" fill="#DE3151"/>
                                            <path d="M11.5085 23.7288C11.5085 25.6945 9.91497 27.2881 7.94921 27.2881C5.98346 27.2881 4.38989 25.6945 4.38989 23.7288C4.38989 21.763 5.98346 20.1694 7.94921 20.1694C9.91497 20.1694 11.5085 21.763 11.5085 23.7288Z" fill="white"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.2204 23.7287C12.2204 26.0876 10.3081 27.9999 7.94917 27.9999C5.59025 27.9999 3.67798 26.0876 3.67798 23.7287C3.67798 21.3698 5.59025 19.4575 7.94917 19.4575C10.3081 19.4575 12.2204 21.3698 12.2204 23.7287ZM7.94917 27.288C9.91493 27.288 11.5085 25.6945 11.5085 23.7287C11.5085 21.7629 9.91493 20.1694 7.94917 20.1694C5.98341 20.1694 4.38984 21.7629 4.38984 23.7287C4.38984 25.6945 5.98341 27.288 7.94917 27.288Z" fill="black"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M6.31535 21.2529C5.51265 21.7837 4.98315 22.6944 4.98315 23.7288C4.98315 25.367 6.31112 26.6949 7.94926 26.6949C9.24148 26.6949 10.3407 25.8686 10.7473 24.7155L6.31535 21.2529Z" fill="#F5BF41"/>
                                        </svg>
                                    }
                                >
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 56, height: 56 }} />
                                </Badge>                                
                            </div>
                        </div>
                    </div>

                    <div className='listing-info-container'>
                        <div className='listing-info-row'>
                            <div className='listing-info-icon'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.00029 25.6671H23.0003C24.473 25.6671 25.667 24.4732 25.667 23.0004V13.0004L16.0003 6.33374L6.33362 13.0004V23.0004C6.33362 24.4732 7.52753 25.6671 9.00029 25.6671Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.9995 20.9989C12.9995 19.5262 14.1934 18.3323 15.6662 18.3323H16.3328C17.8056 18.3323 18.9995 19.5262 18.9995 20.9989V25.6656H12.9995V20.9989Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='listing-info-titlesub'>
                                <p className='info-title'>Entire home</p>
                                <p className='info-subtitle'>You’ll have the apartment to yourself</p>
                            </div>
                        </div>
                        <div className='listing-info-row'>
                            <div className='listing-info-icon'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 6.33325C20 10.0151 18.0153 13.3333 14.3334 13.3333C18.0153 13.3333 20 16.6514 20 20.3333C20 16.6514 21.9848 13.3333 25.6667 13.3333C21.9848 13.3333 20 10.0151 20 6.33325Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.6667 16.9999C10.6667 19.2091 8.54251 21.3333 6.33337 21.3333C8.54251 21.3333 10.6667 23.4574 10.6667 25.6666C10.6667 23.4574 12.7909 21.3333 15 21.3333C12.7909 21.3333 10.6667 19.2091 10.6667 16.9999Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='listing-info-titlesub'>
                                <p className='info-title'>Enhanced Clean</p>
                                <p className='info-subtitle'>This Host committed to Airbnb’s 5-step enhanced cleaning process.</p>
                            </div>
                        </div>
                        <div className='listing-info-row'>
                            <div className='listing-info-icon'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.3333 6.33325H11.6667C10.1939 6.33325 9 7.52716 9 8.99992V25.6666H23V8.99992C23 7.52716 21.8061 6.33325 20.3333 6.33325Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.3333 15.9999C19.3333 16.3681 19.0349 16.6666 18.6667 16.6666C18.2985 16.6666 18 16.3681 18 15.9999C18 15.6317 18.2985 15.3333 18.6667 15.3333C19.0349 15.3333 19.3333 15.6317 19.3333 15.9999Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6.33337 25.6667H25.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='listing-info-titlesub'>
                                <p className='info-title'>Self check-in</p>
                                <p className='info-subtitle'>Check yourself in with the keypad.</p>
                            </div>
                        </div>
                        <div className='listing-info-row'>
                            <div className='listing-info-icon'>
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.33337 11.6667C6.33337 10.1939 7.52728 9 9.00004 9H23C24.4728 9 25.6667 10.1939 25.6667 11.6667V23C25.6667 24.4728 24.4728 25.6667 23 25.6667H9.00004C7.52728 25.6667 6.33337 24.4728 6.33337 23V11.6667Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.6666 6.33325V10.9999" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21.3334 6.33325V10.9999" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.3334 14.3333H21.6667" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='listing-info-titlesub cal-align'>
                                <p className='info-title'>Free cancellation before Feb 14</p>
                                <p className='info-subtitle'></p>
                            </div>
                        </div>
                    </div>

                    <div className='listing-description-container'>
                        <p>
                            Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux.
                            Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the charms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can access the apartment by tram A and C and bus routes 27 and 44.
                            ...
                        </p>
                    </div>

                    <div className='listing-bedroom-container'>
                        <p className='bedroom-container-title'>Where you’ll sleep</p>
                        <div className='bedroom-info'>
                            <img src='https://s3-alpha-sig.figma.com/img/91d6/ccd9/96e5b436aa98cbfacf7fc152380f2a69?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y3BAwIMInbcpBdfRLY7pcSj9F2R3k~8OFY1X6H0d1S3URXR8FwNGgSXho9WS~0FDfXcnYSMwITLzMInkKGIKUEAwncSGZC0rZ4DN29tX5bmEa2blC~UOSBUHDNxg9gjRozXa83b-l4lJu1uIFEUrjQlox--FgAO-BzRBCgaDwNuqSxFJCNEhsoJ5FYjdvqps2WCwDm0YBst2Cb74ZV--fZg~sOXd5E8GMXevrgRbfoEtpr0vHoHVfdDtY3Z9MTD6sju93zNTn2fP0BVKGPnF3lhB4d~THu~pV4pS6dFaBSfvszHoOLbd~QlD71q4Q1xjR1lnRnXe1q11-VT5JOJ1kw__' alt='bedroom' />
                            <div className='bedroom-titlesub'>
                                <p className='bedroom-title'>Bedroom</p>
                                <p className='bedroom-subtitle'>1 queen bed</p>
                            </div>
                        </div>
                    </div>

                    <div className='listing-amenities-container'>
                        <p className='amenities-title'>What this place offers</p>
                        <div className='amenities-columns'>
                            <div className='amenities-column'>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.33337 17.3334C6.33337 9.86671 25.6667 6.33337 25.6667 6.33337C25.6667 6.33337 24.3334 25.6667 16 25.6667C10.6667 25.6667 6.33337 22.6667 6.33337 17.3334Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.33337 25.6666C6.33337 25.6666 10.6667 18.6666 16.3334 15.6666" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Garden view</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.6667 24C16.6667 24.3682 16.3682 24.6667 16 24.6667C15.6319 24.6667 15.3334 24.3682 15.3334 24C15.3334 23.6319 15.6319 23.3334 16 23.3334C16.3682 23.3334 16.6667 23.6319 16.6667 24Z" stroke="black"/>
                                            <path d="M12.6666 19.417C13.602 18.7355 14.754 18.3334 16 18.3334C17.2459 18.3334 18.3979 18.7355 19.3333 19.417" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M22.2837 14.9701C20.5024 13.7282 18.3364 13 16.0003 13C13.6641 13 11.4981 13.7282 9.7168 14.9701" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.66663 10.5942C9.31224 8.74886 12.5297 7.66663 16 7.66663C19.4702 7.66663 22.6877 8.74886 25.3333 10.5942" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Wifi</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M25.6667 16C25.6667 21.3388 21.3388 25.6667 16 25.6667C10.6613 25.6667 6.33337 21.3388 6.33337 16C6.33337 10.6613 10.6613 6.33337 16 6.33337C21.3388 6.33337 25.6667 10.6613 25.6667 16Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Free washer - in building</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.3334 9.66671H23C24.4728 9.66671 25.6667 8.4728 25.6667 7.00004V6.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16.3334 16.3334H10.3334" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9.66671 9.66663H6.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M13.6667 22.3334H6.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M25.6667 16.3334H21" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M18.3334 22.3334H23C24.4728 22.3334 25.6667 23.5273 25.6667 25V25.6667" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Central air conditioning</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.6669 25.6666H10.3333C8.86053 25.6666 7.66663 24.4727 7.66663 23V13.3333L16.0001 7.66663L24.3336 13.3333V23C24.3336 24.4727 23.1397 25.6666 21.6669 25.6666Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M8 14.3334H24" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M16 7.66671V6.33337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Refrigerator</p>
                                    </div>
                                </div>
                            </div>
                            <div className='amenities-column'>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.33325 9.00004C6.33325 7.52728 7.52716 6.33337 8.99992 6.33337H22.9999C24.4727 6.33337 25.6666 7.52728 25.6666 9.00004V21.6667C25.6666 23.1395 24.4727 24.3334 22.9999 24.3334H8.99992C7.52716 24.3334 6.33325 23.1395 6.33325 21.6667V9.00004Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M21 6.66663V24" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M9 24.6666V25.6666" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M23 24.6666V25.6666" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.3333 10.3334L10.3333 12.3334" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17.6666 10.3334L10.3333 17.6667" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Kitchen</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.9721 9.02782L22.231 8.91267C22.1943 9.14913 22.2726 9.38893 22.4418 9.55814C22.611 9.72736 22.8508 9.80566 23.0873 9.76892L22.9721 9.02782ZM21.5902 12.8846L22.1503 12.3858C22.013 12.2317 21.8182 12.1409 21.6119 12.1349C21.4055 12.129 21.2059 12.2083 21.0599 12.3543L21.5902 12.8846ZM12.8845 21.5903L12.3542 21.06C12.2082 21.206 12.1288 21.4057 12.1348 21.612C12.1408 21.8184 12.2315 22.0131 12.3857 22.1504L12.8845 21.5903ZM9.02769 22.9723L9.7688 23.0874C9.80554 22.8509 9.72723 22.6111 9.55802 22.4419C9.38881 22.2727 9.14901 22.1944 8.91255 22.2312L9.02769 22.9723ZM10.4096 19.1155L9.84955 19.6143C9.98684 19.7684 10.1816 19.8592 10.388 19.8651C10.5943 19.8711 10.794 19.7918 10.94 19.6458L10.4096 19.1155ZM19.1153 10.4097L19.6457 10.9401C19.7916 10.7941 19.871 10.5944 19.865 10.3881C19.8591 10.1817 19.7683 9.98696 19.6141 9.84967L19.1153 10.4097ZM23.7133 9.14296C23.7374 8.98731 23.7499 8.82821 23.7499 8.66671H22.2499C22.2499 8.75084 22.2434 8.83294 22.231 8.91267L23.7133 9.14296ZM23.3333 8.25004C23.1717 8.25004 23.0126 8.26253 22.857 8.28671L23.0873 9.76892C23.167 9.75654 23.2491 9.75004 23.3333 9.75004V8.25004ZM26.4166 11.3334C26.4166 9.6305 25.0361 8.25004 23.3333 8.25004V9.75004C24.2077 9.75004 24.9166 10.4589 24.9166 11.3334H26.4166ZM23.3333 14.4167C25.0361 14.4167 26.4166 13.0363 26.4166 11.3334H24.9166C24.9166 12.2078 24.2077 12.9167 23.3333 12.9167V14.4167ZM21.0301 13.3834C21.5938 14.0163 22.4172 14.4167 23.3333 14.4167V12.9167C22.863 12.9167 22.4414 12.7126 22.1503 12.3858L21.0301 13.3834ZM13.4148 22.1207L22.1205 13.415L21.0599 12.3543L12.3542 21.06L13.4148 22.1207ZM14.4166 23.3334C14.4166 22.4174 14.0162 21.5939 13.3833 21.0303L12.3857 22.1504C12.7125 22.4415 12.9166 22.8631 12.9166 23.3334H14.4166ZM11.3333 26.4167C13.0361 26.4167 14.4166 25.0363 14.4166 23.3334H12.9166C12.9166 24.2078 12.2077 24.9167 11.3333 24.9167V26.4167ZM8.24992 23.3334C8.24992 25.0363 9.63037 26.4167 11.3333 26.4167V24.9167C10.4588 24.9167 9.74992 24.2078 9.74992 23.3334H8.24992ZM8.28658 22.8571C8.2624 23.0128 8.24992 23.1719 8.24992 23.3334H9.74992C9.74992 23.2493 9.75641 23.1671 9.7688 23.0874L8.28658 22.8571ZM8.66659 23.75C8.82809 23.75 8.98719 23.7376 9.14284 23.7134L8.91255 22.2312C8.83282 22.2435 8.75071 22.25 8.66659 22.25V23.75ZM5.58325 20.6667C5.58325 22.3696 6.96371 23.75 8.66659 23.75V22.25C7.79213 22.25 7.08325 21.5412 7.08325 20.6667H5.58325ZM8.66659 17.5834C6.96371 17.5834 5.58325 18.9638 5.58325 20.6667H7.08325C7.08325 19.7923 7.79213 19.0834 8.66659 19.0834V17.5834ZM10.9697 18.6167C10.4061 17.9838 9.58259 17.5834 8.66659 17.5834V19.0834C9.13684 19.0834 9.55847 19.2874 9.84955 19.6143L10.9697 18.6167ZM18.585 9.87942L9.87929 18.5851L10.94 19.6458L19.6457 10.9401L18.585 9.87942ZM17.5833 8.66671C17.5833 9.58271 17.9836 10.4062 18.6165 10.9698L19.6141 9.84967C19.2873 9.55859 19.0833 9.13696 19.0833 8.66671H17.5833ZM20.6666 5.58337C18.9637 5.58337 17.5833 6.96383 17.5833 8.66671H19.0833C19.0833 7.79226 19.7921 7.08337 20.6666 7.08337V5.58337ZM23.7499 8.66671C23.7499 6.96383 22.3695 5.58337 20.6666 5.58337V7.08337C21.541 7.08337 22.2499 7.79226 22.2499 8.66671H23.7499Z" fill="#141414"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Pets allowed</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24.3333 18.6667C24.3333 24 20.6667 25.6667 16 25.6667C10.6667 25.6667 7.66675 21.8667 7.66675 18.6667C7.66675 15.4667 9.33341 12.5556 10.6667 11.6667C10.6667 15.4 14.2223 17.7778 16 17.6667C12.8 12.8667 15.5556 7.5556 17.3333 6.33337C17.3333 12.3334 24.3333 13.3334 24.3333 18.6667Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Dryer</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.6666 13.3333L25.6666 10.3333V21.6667L20.6666 18.6667M8.99992 23H17.6666C19.1393 23 20.3333 21.8061 20.3333 20.3333V11.6667C20.3333 10.1939 19.1393 9 17.6666 9H8.99992C7.52716 9 6.33325 10.1939 6.33325 11.6667V20.3333C6.33325 21.8061 7.52716 23 8.99992 23Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Security cameras on property</p>
                                    </div>
                                </div>
                                <div className='amenity-row'>
                                    <div className='amenity-icon'>
                                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="9.33325" cy="17.3334" rx="3" ry="3" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <ellipse cx="22.6667" cy="17.3334" rx="3" ry="3" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M21.3334 14.6666L19.6667 7.66663H25.3334" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12.6666 17.3333H16.3333M16.3333 17.3333L11.6666 10.3333H13.9999H9.33325M16.3333 17.3333H19.3333" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M6.33325 24.3334H25.6666" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className='amenity-name'>
                                        <p>Bicycles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='amenities-button'>Show all 37 amenities</button>
                    </div>

                    <div className='listing-calendar-container'>
                        <div className='calender-titlesub'>
                            <p className='calendar-title'>7 nights in New York</p>
                            <p className='calendar-subtitle'>Feb 19, 2022 - Feb 26, 2022</p>
                        </div>
                        <div className='calendar-months'>
                            <div className='calendar-month'>
                                <DatePicker />
                            </div>
                            <div className='calendar-month'>
                                <DatePicker />
                            </div>
                        </div>
                        <div className='calendar-actions'>
                            <div className='calendar-action-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25V6.75C19.25 5.64543 18.3546 4.75 17.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75Z" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.5 8C8.5 8.27614 8.27614 8.5 8 8.5C7.72386 8.5 7.5 8.27614 7.5 8C7.5 7.72386 7.72386 7.5 8 7.5C8.27614 7.5 8.5 7.72386 8.5 8Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.5 12C8.5 12.2761 8.27614 12.5 8 12.5C7.72386 12.5 7.5 12.2761 7.5 12C7.5 11.7239 7.72386 11.5 8 11.5C8.27614 11.5 8.5 11.7239 8.5 12Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.5 8C12.5 8.27614 12.2761 8.5 12 8.5C11.7239 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.7239 7.5 12 7.5C12.2761 7.5 12.5 7.72386 12.5 8Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.5 8C16.5 8.27614 16.2761 8.5 16 8.5C15.7239 8.5 15.5 8.27614 15.5 8C15.5 7.72386 15.7239 7.5 16 7.5C16.2761 7.5 16.5 7.72386 16.5 8Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.5 12C16.5 12.2761 16.2761 12.5 16 12.5C15.7239 12.5 15.5 12.2761 15.5 12C15.5 11.7239 15.7239 11.5 16 11.5C16.2761 11.5 16.5 11.7239 16.5 12Z" stroke="#141414" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.75 16.25H16.25" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='calendar-action-clear'>
                                <p>Clear dates</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='listing-details-right'>
                    <div className='booking-box-container'>
                        <div className='booking-box-header'>
                            <div className='booking-price'>
                                <p className='price-bold'>$75</p>
                                <p>/</p>
                                <p>night</p>
                            </div>
                            <div className='booking-rating'>
                                <div className='booking-icon'>
                                    <StarBorderOutlinedIcon fontSize='small' sx={{color: '#DE3151'}}/>
                                    <p>5.0</p>
                                </div>
                                <p>&bull;</p>
                                <p className='booking-review'>7 reviews</p>
                            </div>
                        </div>
                        <div className='guest-dates'>
                            <div className='guest-inout'>
                                <div className='guest-in'>
                                    <p className='attribute'>CHECKIN</p>
                                    <p className='value'>02/14/2025</p>
                                </div>
                                <div className='guest-out'>
                                    <p className='attribute'>CHECKOUT</p>
                                    <p className='value'>02/16/2025</p>
                                </div>
                            </div>
                            <div className='guest-number'>
                                <div className='guest-details'>
                                    <p className='attribute'>GUESTS</p>
                                    <p className='value'>2 guests</p>
                                </div>
                                <div className='guest-icon'>
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.3334 14.3333L16.0001 18.9999L11.6667 14.3333" stroke="#141414" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <button className='reserve-btn'> Reserve</button>
                        <p className='charge-disclaimer'>
                            You won’t be charged yet
                        </p>
                        <div className='guest-price-details'>
                            <div className='guest-price-row'>
                                <p className='guest-price-item'>$75 x 7 nights</p>
                                <p className='guest-price-value'>$555</p>
                            </div>
                            <div className='guest-price-row'>
                                <p className='guest-price-item'>Weekly discount</p>
                                <p className='guest-price-value green'>-$28</p>
                            </div>
                            <div className='guest-price-row'>
                                <p className='guest-price-item'>Cleaning fee</p>
                                <p className='guest-price-value'>$62</p>
                            </div>
                            <div className='guest-price-row'>
                                <p className='guest-price-item'>Service fee</p>
                                <p className='guest-price-value'>$83</p>
                            </div>
                            <div className='guest-price-row'>
                                <p className='guest-price-item'>Occupancy taxes and fees</p>
                                <p className='guest-price-value'>$29</p>
                            </div>
                        </div>
                        <div className='guest-price-total'>
                            <p className='guest-price-total-title'>Total</p>
                            <p className='guest-price-total-value'>$701</p>
                        </div>
                    </div>

                    <div className='report-listing'>
                        <div className='report-icon'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.16675 3.83337V12.8334" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M3.16675 10.1666V3.83329C3.16675 3.83329 4.00008 3.16663 6.00008 3.16663C8.00008 3.16663 9.00008 4.16663 10.6667 4.16663C12.3334 4.16663 12.8334 3.83329 12.8334 3.83329L10.5001 6.99996L12.8334 10.1666C12.8334 10.1666 12.3334 10.8333 10.6667 10.8333C9.00008 10.8333 7.66675 9.49996 6.00008 9.49996C4.33341 9.49996 3.16675 10.1666 3.16675 10.1666Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <p>Report this listing</p>
                    </div>
                </div>
            </div>

            <div className='reviews-container'>
                <div className='reviews-header'>
                    <div className='reviews-header-icon'>
                        <StarIcon fontSize='medium' sx={{color: '#DE3151'}} />
                        <p> 5.0</p>
                    </div>
                    <p>&bull;</p>
                    <p>7 reviews</p>
                </div>
                <div className='reviews-ratings-container'>
                    <div className='review-ratings-column'>
                        <div className='review-category-row'>
                            <p>Cleanlines</p>
                            <div className='review-rating-bar'>
                                <div className='review-bar'>
                                    <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="183" height="4" fill="black"/>
                                    </svg>
                                </div>
                                <div className='review-rating'>
                                    <p>5.0</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-category-row'>
                            <p>Communication</p>
                            <div className='review-rating-bar'>
                                <div className='review-bar'>
                                    <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="183" height="4" fill="black"/>
                                    </svg>
                                </div>
                                <div className='review-rating'>
                                    <p>5.0</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-category-row'>
                            <p>Check-in</p>
                            <div className='review-rating-bar'>
                                <div className='review-bar'>
                                    <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="183" height="4" fill="black"/>
                                    </svg>
                                </div>
                                <div className='review-rating'>
                                    <p>5.0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='review-ratings-column'>
                        <div className='review-category-row'>
                            <p>Accuracy</p>
                            <div className='review-rating-bar'>
                                <div className='review-bar'>
                                    <svg width="120" height="4" viewBox="0 0 120 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="183" height="4" fill="black"/>
                                    </svg>
                                </div>
                                <div className='review-rating'>
                                    <p>5.0</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-category-row'>
                            <p>Location</p>
                            <div className='review-rating-bar'>
                                <div className='review-bar'>
                                    <svg width="108" height="4" viewBox="0 0 108 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="108" height="4" fill="black"/>
                                    </svg>
                                </div>
                                <div className='review-rating'>
                                    <p>4.9</p>
                                </div>
                            </div>
                        </div>
                        <div className='review-category-row'>
                            <p>Value</p>
                            <div className='review-rating-bar'>
                                <div className='review-bar'>
                                    <svg width="88" height="4" viewBox="0 0 88 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="88" height="4" fill="black"/>
                                    </svg>
                                </div>
                                <div className='review-rating'>
                                    <p>4.7</p>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className='review-comments-container'>
                    <div className='review-comments-row'>
                        <div className='review-comment'>
                            <div className='review-user-profile'>
                                <div className='review-user-avatar'>
                                    <Avatar>J</Avatar>
                                </div>
                                <div className='review-user-name'>
                                    <p className='user-name-title'>Jose</p>
                                    <p className='user-name-subtitle'>December 2024</p>
                                </div>
                            </div>
                            <p className='user-comment'>
                                Host was very attentive.
                            </p>
                        </div>
                        <div className='review-comment'>
                            <div className='review-user-profile'>
                                <div className='review-user-avatar'>
                                    <Avatar>S</Avatar>
                                </div>
                                <div className='review-user-name'>
                                    <p className='user-name-title'>Shayla</p>
                                    <p className='user-name-subtitle'>December 2024</p>
                                </div>
                            </div>
                            <p className='user-comment'>
                                Wonderful neighbourhood.Easy access to restaurants.
                            </p>
                        </div>
                    </div>
                    <div className='review-comments-row'>
                        <div className='review-comment'>
                            <div className='review-user-profile'>
                                <div className='review-user-avatar'>
                                    <Avatar>V</Avatar>
                                </div>
                                <div className='review-user-name'>
                                    <p className='user-name-title'>Veronica</p>
                                    <p className='user-name-subtitle'>November 2024</p>
                                </div>
                            </div>
                            <p className='user-comment'>
                                Amazing place. Everything one needs in a stay.
                            </p>
                        </div>
                        <div className='review-comment'>
                            <div className='review-user-profile'>
                                <div className='review-user-avatar'>
                                    <Avatar>L</Avatar>
                                </div>
                                <div className='review-user-name'>
                                    <p className='user-name-title'>Luke</p>
                                    <p className='user-name-subtitle'>December 2024</p>
                                </div>
                            </div>
                            <p className='user-comment'>
                                Nice place to stay!
                            </p>
                        </div>
                    </div>
                    <div className='review-comments-row'>
                        <div className='review-comment'>
                            <div className='review-user-profile'>
                                <div className='review-user-avatar'>
                                    <Avatar>J</Avatar>
                                </div>
                                <div className='review-user-name'>
                                    <p className='user-name-title'>Josh</p>
                                    <p className='user-name-subtitle'>November 2024</p>
                                </div>
                            </div>
                            <p className='user-comment'>
                                Well designed and fun space
                            </p>
                        </div>
                        <div className='review-comment'>
                            <div className='review-user-profile'>
                                <div className='review-user-avatar'>
                                    <Avatar>J</Avatar>
                                </div>
                                <div className='review-user-name'>
                                    <p className='user-name-title'>Jennifer</p>
                                    <p className='user-name-subtitle'>January 2025</p>
                                </div>
                            </div>
                            <p className='user-comment'>
                                Centric place, with substation and supermarket.
                            </p>
                        </div>
                    </div>
                </div>
                <button className='review-profiles-button'>
                    Show all 12 reviews
                </button>
            </div>

            <div className='about-host-container'>
                <div className='about-host-header'>
                    <div className='about-host-details'>
                        <div className='about-host-avatar'>
                            <Badge
                                overlap="circle"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                badgeContent={
                                    <svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M15.1865 1.30513C15.1865 0.977508 14.9209 0.711914 14.5933 0.711914H1.30513C0.977508 0.711914 0.711914 0.977508 0.711914 1.30513V11.5801C0.711914 11.7599 0.793457 11.93 0.933629 12.0426L7.57769 17.3796C7.79469 17.5539 8.10371 17.5539 8.32071 17.3796L14.9648 12.0426C15.1049 11.93 15.1865 11.7599 15.1865 11.5801V1.30513Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.30508 0H14.5932C15.314 0 15.8983 0.584306 15.8983 1.30508V11.58C15.8983 11.9756 15.7189 12.3498 15.4105 12.5975L8.76646 17.9345C8.28906 18.318 7.60924 18.318 7.13184 17.9345L0.487773 12.5975C0.179394 12.3498 0 11.9756 0 11.58V1.30508C0 0.584306 0.584306 0 1.30508 0ZM14.5932 0.711864C14.9208 0.711864 15.1864 0.977458 15.1864 1.30508V11.58C15.1864 11.7598 15.1049 11.9299 14.9647 12.0425L8.32066 17.3795C8.10366 17.5539 7.79465 17.5539 7.57765 17.3795L0.93358 12.0425C0.793407 11.9299 0.711864 11.7598 0.711864 11.58V1.30508C0.711864 0.977458 0.977458 0.711864 1.30508 0.711864H14.5932Z" fill="black"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.42411 11.5252L14.3804 1.54248V11.5252L14.3802 11.5252L7.90204 16.7289L1.42391 11.5252H1.42411Z" fill="#F5BF41"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.3803 11.5252L1.42407 1.54248V11.5252L1.42416 11.5252L7.90228 16.7289L14.3804 11.5252H14.3803Z" fill="#DE3151"/>
                                        <path d="M11.5085 23.7288C11.5085 25.6945 9.91497 27.2881 7.94921 27.2881C5.98346 27.2881 4.38989 25.6945 4.38989 23.7288C4.38989 21.763 5.98346 20.1694 7.94921 20.1694C9.91497 20.1694 11.5085 21.763 11.5085 23.7288Z" fill="white"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12.2204 23.7287C12.2204 26.0876 10.3081 27.9999 7.94917 27.9999C5.59025 27.9999 3.67798 26.0876 3.67798 23.7287C3.67798 21.3698 5.59025 19.4575 7.94917 19.4575C10.3081 19.4575 12.2204 21.3698 12.2204 23.7287ZM7.94917 27.288C9.91493 27.288 11.5085 25.6945 11.5085 23.7287C11.5085 21.7629 9.91493 20.1694 7.94917 20.1694C5.98341 20.1694 4.38984 21.7629 4.38984 23.7287C4.38984 25.6945 5.98341 27.288 7.94917 27.288Z" fill="black"/>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6.31535 21.2529C5.51265 21.7837 4.98315 22.6944 4.98315 23.7288C4.98315 25.367 6.31112 26.6949 7.94926 26.6949C9.24148 26.6949 10.3407 25.8686 10.7473 24.7155L6.31535 21.2529Z" fill="#F5BF41"/>
                                    </svg>
                                }
                            >
                                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" sx={{ width: 56, height: 56 }} />
                            </Badge>                                
                        </div>
                        <div className='about-host-titlesub'>
                            <p className='about-host-title'>Hosted by Ghazal</p>
                            <p className='about-host-subtitle'>Joined May 2021</p>
                        </div>
                    </div>
                    <div className='about-host-header-rating'>
                        <div className='about-host-header-icons'>
                            <div className='about-host-header-icon'>
                                <StarBorderOutlinedIcon fontSize='small' className='header-star' />
                            </div>
                            <p>12 Reviews</p>
                            <div className='about-host-header-icon'>
                                <VerifiedUserOutlinedIcon fontSize='small' className='header-star' />
                            </div>
                            <p>Identity verified</p>
                            <div className='about-host-header-icon'>
                                <MilitaryTechOutlinedIcon fontSize='small' className='header-star' />
                            </div>
                            <p>Superhost</p>
                        </div>
                    </div>
                    <div className="about-host-description">
                        <p className='description-dark'>Ghazal is a superhost.</p>
                        <p className='description-light'>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                        <p className='description-light'>Response rate: 100%</p>
                        <p className='description-light'>Response time: within an hour</p>
                    </div>
                    <div className='about-host-contact'>
                        <button className='about-host-contact-btn'>
                            Contact Host
                        </button>
                    </div>
                    <div className='about-host-disclaimer'>
                        <div className='disclaimer-icon'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 20.5C5 20.6326 4.94732 20.7598 4.85355 20.8536C4.75979 20.9473 4.63261 21 4.5 21H4V21.5C4 21.6326 3.94732 21.7598 3.85355 21.8536C3.75979 21.9473 3.63261 22 3.5 22C3.36739 22 3.24021 21.9473 3.14645 21.8536C3.05268 21.7598 3 21.6326 3 21.5V21H2.5C2.36739 21 2.24021 20.9473 2.14645 20.8536C2.05268 20.7598 2 20.6326 2 20.5C2 20.3674 2.05268 20.2402 2.14645 20.1464C2.24021 20.0527 2.36739 20 2.5 20H3V19.5C3 19.3674 3.05268 19.2402 3.14645 19.1464C3.24021 19.0527 3.36739 19 3.5 19C3.63261 19 3.75979 19.0527 3.85355 19.1464C3.94732 19.2402 4 19.3674 4 19.5V20H4.5C4.63261 20 4.75979 20.0527 4.85355 20.1464C4.94732 20.2402 5 20.3674 5 20.5ZM6.5 22C6.40111 22 6.30444 22.0293 6.22221 22.0843C6.13999 22.1392 6.0759 22.2173 6.03806 22.3087C6.00022 22.4 5.99031 22.5006 6.00961 22.5975C6.0289 22.6945 6.07652 22.7836 6.14645 22.8536C6.21637 22.9235 6.30546 22.9711 6.40245 22.9904C6.49945 23.0097 6.59998 22.9998 6.69134 22.9619C6.7827 22.9241 6.86079 22.86 6.91573 22.7778C6.97068 22.6956 7 22.5989 7 22.5C7 22.3674 6.94732 22.2402 6.85355 22.1464C6.75979 22.0527 6.63261 22 6.5 22ZM22.5 2H22V1.5C22 1.36739 21.9473 1.24021 21.8536 1.14645C21.7598 1.05268 21.6326 1 21.5 1C21.3674 1 21.2402 1.05268 21.1464 1.14645C21.0527 1.24021 21 1.36739 21 1.5V2H20.5C20.3674 2 20.2402 2.05268 20.1464 2.14645C20.0527 2.24021 20 2.36739 20 2.5C20 2.63261 20.0527 2.75979 20.1464 2.85355C20.2402 2.94732 20.3674 3 20.5 3H21V3.5C21 3.63261 21.0527 3.75979 21.1464 3.85355C21.2402 3.94732 21.3674 4 21.5 4C21.6326 4 21.7598 3.94732 21.8536 3.85355C21.9473 3.75979 22 3.63261 22 3.5V3H22.5C22.6326 3 22.7598 2.94732 22.8536 2.85355C22.9473 2.75979 23 2.63261 23 2.5C23 2.36739 22.9473 2.24021 22.8536 2.14645C22.7598 2.05268 22.6326 2 22.5 2ZM19.92 6.87C17.4088 6.46601 15.0643 5.35617 13.16 3.67C13.1083 3.6189 13.0426 3.58418 12.9713 3.57017C12.8999 3.55616 12.826 3.56348 12.7588 3.59122C12.6916 3.61895 12.6341 3.66588 12.5934 3.72613C12.5527 3.78639 12.5306 3.85729 12.53 3.93L12.61 20.15C12.6133 20.2131 12.6322 20.2744 12.6651 20.3283C12.698 20.3822 12.7438 20.4271 12.7984 20.4589C12.853 20.4906 12.9146 20.5083 12.9778 20.5102C13.0409 20.5122 13.1035 20.4983 13.16 20.47C15.6842 19.3961 17.7634 17.4886 19.0502 15.066C20.337 12.6435 20.7535 9.8527 20.23 7.16C20.2162 7.08386 20.1789 7.01396 20.1232 6.96015C20.0676 6.90633 19.9966 6.87131 19.92 6.86V6.87Z" fill="#FFB400"/>
                                <path d="M14.39 8.32C14.2615 7.9364 14.0156 7.60289 13.6873 7.3666C13.3589 7.13031 12.9645 7.00318 12.56 7.00318C12.1554 7.00318 11.7611 7.13031 11.4327 7.3666C11.1044 7.60289 10.8585 7.9364 10.73 8.32L8.30999 13.17C8.0324 13.6602 7.89408 14.2169 7.90999 14.78C7.94122 15.3613 8.18619 15.9105 8.59782 16.3222C9.00945 16.7338 9.5587 16.9788 10.14 17.01C11.0444 16.9449 11.8989 16.5706 12.56 15.95C13.2211 16.5706 14.0756 16.9449 14.98 17.01C15.5613 16.9788 16.1105 16.7338 16.5222 16.3222C16.9338 15.9105 17.1788 15.3613 17.21 14.78C17.2259 14.2169 17.0876 13.6602 16.81 13.17L14.39 8.32ZM11.67 12.7C11.67 12.65 11.68 11.47 12.56 11.47C13.44 11.47 13.44 12.65 13.44 12.7C13.3496 13.3883 13.0413 14.0296 12.56 14.53C12.0751 14.031 11.7631 13.3895 11.67 12.7ZM14.98 16.01C14.3408 15.9483 13.7398 15.6777 13.27 15.24C13.9321 14.5473 14.3439 13.6534 14.44 12.7C14.4677 12.436 14.4431 12.1692 14.3676 11.9147C14.2921 11.6602 14.1672 11.4231 14.0001 11.217C13.8329 11.0108 13.6267 10.8396 13.3934 10.7131C13.16 10.5867 12.904 10.5075 12.64 10.48L12.56 10.47C12.2945 10.4865 12.035 10.5553 11.7961 10.6724C11.5573 10.7895 11.344 10.9527 11.1684 11.1524C10.9928 11.3522 10.8584 11.5847 10.7728 11.8365C10.6873 12.0883 10.6524 12.3546 10.67 12.62L10.68 12.7C10.7753 13.6536 11.1872 14.5478 11.85 15.24C11.3802 15.6777 10.7792 15.9483 10.14 16.01C9.82358 15.981 9.52732 15.842 9.30263 15.6174C9.07795 15.3927 8.93903 15.0964 8.90999 14.78C8.89392 14.3736 8.99455 13.971 9.19999 13.62L11.62 8.77C11.95 8.12 12.17 8.01 12.56 8.01C12.95 8.01 13.17 8.12 13.5 8.77L15.92 13.62C16.1254 13.971 16.2261 14.3736 16.21 14.78C16.1809 15.0964 16.042 15.3927 15.8174 15.6174C15.5927 15.842 15.2964 15.981 14.98 16.01ZM21.99 5.66C21.9697 5.55649 21.9171 5.46206 21.8399 5.39021C21.7627 5.31837 21.6647 5.27279 21.56 5.26C18.1818 4.92552 15.0675 3.28586 12.88 0.689996C12.8313 0.636309 12.7718 0.59341 12.7055 0.564053C12.6392 0.534697 12.5675 0.519531 12.495 0.519531C12.4225 0.519531 12.3508 0.534697 12.2845 0.564053C12.2182 0.59341 12.1587 0.636309 12.11 0.689996C9.92243 3.28586 6.80817 4.92552 3.42999 5.26C3.32529 5.27279 3.22731 5.31837 3.15008 5.39021C3.07284 5.46206 3.02031 5.55649 2.99999 5.66C1.41999 13.85 4.54999 19.68 12.3 22.97C12.3617 22.9961 12.428 23.0096 12.495 23.0096C12.562 23.0096 12.6283 22.9961 12.69 22.97C20.44 19.68 23.56 13.86 21.99 5.66ZM12.5 21.96C5.39999 18.87 2.58999 13.71 3.92999 6.2C7.22181 5.78699 10.2595 4.21677 12.5 1.77C14.7405 4.21677 17.7782 5.78699 21.07 6.2C22.4 13.71 19.59 18.87 12.5 21.96Z" fill="#484848"/>
                            </svg>
                        </div>
                        <div className='disclaimer-text'>
                            <p>To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</p> 
                        </div>
                    </div>
                </div>
            </div>
        
            <div className='things-to-know-container'>
                <div className='things-to-know-title'>
                    <p>Things to know</p>
                </div>
                <div className='things-to-know-columns'>
                    <div className='things-to-know-column'>
                        <div className='things-to-know-column-title'>
                            <p>House rules</p>
                        </div>
                        
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z" stroke="black" strokeWidth="1.5"/>
                                    <path d="M12 8V12L14 14" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Check-in: After 4:00 PM</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12C4.75 7.99594 7.99594 4.75 12 4.75C16.0041 4.75 19.25 7.99594 19.25 12Z" stroke="black" strokeWidth="1.5"/>
                                    <path d="M12 8V12L14 14" stroke="black" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Check out: 10:00 AM</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V19.25H15.25V12.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.75 19.25H19.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.25 9.25L13.75 7M13.75 7L16.25 4.75M13.75 7H19.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                Self check-in with lockbox
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75 7.75H19.25L17.6128 14.7081C17.4002 15.6115 16.5941 16.25 15.666 16.25H11.5395C10.632 16.25 9.83827 15.639 9.60606 14.7618L7.75 7.75ZM7.75 7.75L7 4.75H4.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.5 19C10.5 19.2761 10.2761 19.5 10 19.5C9.72386 19.5 9.5 19.2761 9.5 19C9.5 18.7239 9.72386 18.5 10 18.5C10.2761 18.5 10.5 18.7239 10.5 19Z" stroke="black"/>
                                    <path d="M17.5 19C17.5 19.2761 17.2761 19.5 17 19.5C16.7239 19.5 16.5 19.2761 16.5 19C16.5 18.7239 16.7239 18.5 17 18.5C17.2761 18.5 17.5 18.7239 17.5 19Z" stroke="black"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Not suitable for infants (under 2 years)</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.2499 14C18.2499 18 15.5 19.25 11.9999 19.25C8 19.25 5.75 16.4 5.75 14C5.75 11.6 7 9.41667 8 8.75C8 11.55 10.6666 13.3333 11.9999 13.25C9.59994 9.65 11.6666 5.66667 12.9999 4.75C12.9999 9.25 18.2499 10 18.2499 14Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                No smoking
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2292 6.77083L16.4881 6.65569C16.4513 6.89215 16.5296 7.13195 16.6988 7.30116C16.868 7.47037 17.1078 7.54868 17.3443 7.51194L17.2292 6.77083ZM16.1927 9.66344L16.7528 9.16463C16.6155 9.01047 16.4207 8.91971 16.2144 8.91375C16.008 8.90778 15.8084 8.98713 15.6624 9.13311L16.1927 9.66344ZM9.66344 16.1927L9.13311 15.6624C8.98713 15.8084 8.90778 16.008 8.91375 16.2144C8.91971 16.4207 9.01047 16.6155 9.16463 16.7528L9.66344 16.1927ZM6.77083 17.2292L7.51194 17.3443C7.54868 17.1078 7.47037 16.868 7.30116 16.6988C7.13195 16.5296 6.89215 16.4513 6.65569 16.4881L6.77083 17.2292ZM7.80728 14.3366L7.2472 14.8354C7.38449 14.9895 7.57926 15.0803 7.78561 15.0863C7.99196 15.0922 8.19164 15.0129 8.33761 14.8669L7.80728 14.3366ZM14.3366 7.80728L14.8669 8.33761C15.0129 8.19164 15.0922 7.99196 15.0863 7.78561C15.0803 7.57926 14.9895 7.38449 14.8354 7.2472L14.3366 7.80728ZM17.9703 6.88597C17.9899 6.75974 18 6.6308 18 6.5H16.5C16.5 6.55343 16.4959 6.60538 16.4881 6.65569L17.9703 6.88597ZM17.5 6C17.3692 6 17.2403 6.01011 17.114 6.02972L17.3443 7.51194C17.3946 7.50412 17.4466 7.5 17.5 7.5V6ZM20 8.5C20 7.11929 18.8807 6 17.5 6V7.5C18.0523 7.5 18.5 7.94772 18.5 8.5H20ZM17.5 11C18.8807 11 20 9.88071 20 8.5H18.5C18.5 9.05228 18.0523 9.5 17.5 9.5V11ZM15.6326 10.1622C16.0894 10.6752 16.7573 11 17.5 11V9.5C17.203 9.5 16.937 9.3715 16.7528 9.16463L15.6326 10.1622ZM10.1938 16.723L16.723 10.1938L15.6624 9.13311L9.13311 15.6624L10.1938 16.723ZM11 17.5C11 16.7573 10.6752 16.0894 10.1622 15.6326L9.16463 16.7528C9.3715 16.937 9.5 17.203 9.5 17.5H11ZM8.5 20C9.88071 20 11 18.8807 11 17.5H9.5C9.5 18.0523 9.05228 18.5 8.5 18.5V20ZM6 17.5C6 18.8807 7.11929 20 8.5 20V18.5C7.94772 18.5 7.5 18.0523 7.5 17.5H6ZM6.02972 17.114C6.01011 17.2403 6 17.3692 6 17.5H7.5C7.5 17.4466 7.50412 17.3946 7.51194 17.3443L6.02972 17.114ZM6.5 18C6.6308 18 6.75974 17.9899 6.88597 17.9703L6.65569 16.4881C6.60538 16.4959 6.55343 16.5 6.5 16.5V18ZM4 15.5C4 16.8807 5.11929 18 6.5 18V16.5C5.94772 16.5 5.5 16.0523 5.5 15.5H4ZM6.5 13C5.11929 13 4 14.1193 4 15.5H5.5C5.5 14.9477 5.94772 14.5 6.5 14.5V13ZM8.36736 13.8378C7.91055 13.3248 7.24272 13 6.5 13V14.5C6.79697 14.5 7.06296 14.6285 7.2472 14.8354L8.36736 13.8378ZM13.8062 7.27695L7.27695 13.8062L8.33761 14.8669L14.8669 8.33761L13.8062 7.27695ZM13 6.5C13 7.24272 13.3248 7.91055 13.8378 8.36736L14.8354 7.2472C14.6285 7.06296 14.5 6.79697 14.5 6.5H13ZM15.5 4C14.1193 4 13 5.11929 13 6.5H14.5C14.5 5.94772 14.9477 5.5 15.5 5.5V4ZM18 6.5C18 5.11929 16.8807 4 15.5 4V5.5C16.0523 5.5 16.5 5.94772 16.5 6.5H18Z" fill="black"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>No pets</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.89062 9.28125L4.87279 17.7937C4.44606 18.628 5.29889 19.5379 6.16008 19.1671L14.6016 16.1875" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M13.3196 10.9774C14.9594 12.8695 15.698 15.085 14.9691 15.9259C14.2403 16.7669 12.3202 15.9147 10.6804 14.0226C9.04057 12.1305 8.30205 9.91499 9.03085 9.07406C9.75966 8.23313 11.6798 9.08527 13.3196 10.9774Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.50006 17.6367C8.90326 17.2553 8.27352 16.707 7.68044 16.0227C7.28988 15.5721 6.95046 15.1031 6.6698 14.6387" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.5 5C11.5 5.27614 11.2761 5.5 11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.75 9.25L15.8787 9.12132C17.0503 7.94975 17.0503 6.05025 15.8787 4.87868L15.75 4.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17 13L17.2929 12.7071C17.6834 12.3166 18.3166 12.3166 18.7071 12.7071L19 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>No parties or events</p>
                            </div> 
                        </div>
                    </div>
                    <div className='things-to-know-column'>
                        <div className='things-to-know-column-title'>
                            <p>Health & safety</p>
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3333 4.75C17.3333 5.89705 16.2303 7 15.0833 7C16.2303 7 17.3333 8.10295 17.3333 9.25C17.3333 8.10295 18.4362 7 19.5833 7C18.4362 7 17.3333 5.89705 17.3333 4.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M17.3333 14.75C17.3333 15.8971 16.2303 17 15.0833 17C16.2303 17 17.3333 18.1029 17.3333 19.25C17.3333 18.1029 18.4362 17 19.5833 17C18.4362 17 17.3333 15.8971 17.3333 14.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.33325 7.75C9.33325 9.91666 7.24991 12 5.08325 12C7.24991 12 9.33325 14.0833 9.33325 16.25C9.33325 14.0833 11.4166 12 13.5833 12C11.4166 12 9.33325 9.91666 9.33325 7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Committed to Airbnb’s enhanced cleaning process. Show more</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.08325 19.25V15.75C5.08325 14.6454 5.97868 13.75 7.08325 13.75H13.5833C14.6878 13.75 15.5833 14.6454 15.5833 15.75V19.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.08325 13.5L8.08325 10.75H12.5833L13.5833 13.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.3333 10.5V8.25M10.3333 8.25H9.08325V5.75H11.5833V8.25H10.3333Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.0833 6L18.5833 4.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.0833 8.75L18.5833 11.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M18.0833 7.75H18.5833" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Airbnb’s social-distancing and other COVID-19-related guidelines apply</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0833 7.25H17.5833C18.6878 7.25 19.5833 6.35457 19.5833 5.25V4.75" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12.5833 12.25H8.08325" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.58325 7.25H5.08325" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.5833 16.75H5.08325" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.5833 12.25H16.0833" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.0833 16.75H17.5833C18.6878 16.75 19.5833 17.6454 19.5833 18.75V19.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Carbon monoxide alarm</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5833 12C14.5833 13.2426 13.5759 14.25 12.3333 14.25C11.0906 14.25 10.0833 13.2426 10.0833 12C10.0833 10.7574 11.0906 9.75 12.3333 9.75C13.5759 9.75 14.5833 10.7574 14.5833 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.5833 12C19.5833 16.0041 16.3373 19.25 12.3333 19.25C8.32919 19.25 5.08325 16.0041 5.08325 12C5.08325 7.99594 8.32919 4.75 12.3333 4.75C16.3373 4.75 19.5833 7.99594 19.5833 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Smoke alarm</p>
                            </div> 
                        </div>
                        <div className='things-to-know-list-item'>
                            <div className='things-to-know-icon'>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.08325 7.75C5.08325 6.64543 5.97868 5.75 7.08325 5.75H17.5833C18.6878 5.75 19.5833 6.64543 19.5833 7.75V16.25C19.5833 17.3546 18.6878 18.25 17.5833 18.25H7.08325C5.97868 18.25 5.08325 17.3546 5.08325 16.25V7.75Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.33325 10.25H19.3333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.08325 14.25H10.5833" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.0833 14.25H16.5833" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className='things-to-know-text'>
                                <p>Security Deposit - if you damage the home, you may be charged up to $566</p>
                            </div> 
                        </div>
                        <div className='things-to-know-showmore'>
                            <p>Show more</p>
                            <ChevronRightIcon /> 
                        </div>
                    </div>
                    <div className='things-to-know-column'>
                        <div className='things-to-know-column-title'>
                            <p>Cancellation policy</p>
                        </div>
                        
                        <div className='things-to-know-cancellation'>
                            <p>Free cancellation before Feb 14</p>
                        </div>
                        <div className='things-to-know-showmore'>
                            <p>Show more</p>
                            <ChevronRightIcon /> 
                        </div>
                    </div>
                </div>
            </div>                        
        </div>

        <div className='explore-footer-container'>
            <div className='explore-footer-title'>
                <p>Explore other options in France</p>
            </div>
            <div className='explore-footer-columns'>
                <div className='explore-footer-column'>
                    <div className='explore-footer-cities'>
                        <p>Paris</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Lille</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Toulouse</p>
                    </div>
                </div>
                <div className='explore-footer-column'>
                    <div className='explore-footer-cities'>
                        <p>Nice</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Aix-en-Provence</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Montpellier</p>
                    </div>
                </div>
                <div className='explore-footer-column'>
                    <div className='explore-footer-cities'>
                        <p>Lyon</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Rouen</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Dijon</p>
                    </div>
                </div>
                <div className='explore-footer-column'>
                    <div className='explore-footer-cities'>
                        <p>Marseille</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Amiens</p>
                    </div>
                    <div className='explore-footer-cities'>
                        <p>Grenoble</p>
                    </div>
                </div>
            </div>

            <div className='explore-unique-stays'>
                <div className='explore-unique-stays-title'>
                    <p>Unique stays on Airbnb</p>
                </div>

                <div className='explore-unique-stays-columns'>
                    <div className='explore-footer-column'>
                        <div className='explore-footer-cities'>
                            <p>Beach House Rentals</p>
                        </div>
                        <div className='explore-footer-cities'>
                            <p>Cabin Rentals</p>
                        </div>
                    </div>
                    <div className='explore-footer-column'>
                        <div className='explore-footer-cities'>
                            <p>Camper Rentals</p>
                        </div>
                        <div className='explore-footer-cities'>
                            <p>Tiny House Rentals</p>
                        </div>
                    </div>
                    <div className='explore-footer-column'>
                        <div className='explore-footer-cities'>
                            <p>Glamping Rentals</p>
                        </div>
                        <div className='explore-footer-cities'>
                            <p>Lakehouse Rentals</p>
                        </div>
                    </div>
                    <div className='explore-footer-column'>
                        <div className='explore-footer-cities'>
                            <p>Treehouse Rentals</p>
                        </div>
                        <div className='explore-footer-cities'>
                            <p>Mountain Chalet Rentals</p>
                        </div>
                    </div>
                </div>                                
            </div>

            <div className='explore-footer-breadcrumb'>
                <p>Airbnb</p>
                <ChevronRightIcon fontSize='small'/>
                <p>Europe</p>
                <ChevronRightIcon fontSize='small' />
                <p>France</p>
                <ChevronRightIcon fontSize='small' />
                <p>Bordeaux</p>
            </div>
        </div>
        
        <div className='listings-footer-container'>
            <div className='footer-terms'>
                <div className='footer-term-items'>
                    <div className='footer-head'>
                    <p>Support</p>
                    </div>
                    <p>Help Center</p>
                    <p>Safety information</p>
                    <p>Cancellation options</p>
                    <p>Our COVID-19 Response</p>
                    <p>Supporting people with disabilities</p>
                    <p>Report a neighbourhood concern</p>
                    </div>
                    <div className='footer-term-items'>
                    <div className='footer-head'>
                        <p>Community</p>
                    </div>
                    <p>Airbnb.org: disaster relief housing</p>
                    <p>Support: Afghan refugees</p>
                    <p>Celebrating diversity & belonging</p>
                    <p>Combating discrimination</p>
                    </div>
                    <div className='footer-term-items'>
                    <div className='footer-head'>
                        <p>Hosting</p>
                    </div>
                    <p>Try Hosting</p>
                    <p>AirCover: protection for Hosts</p>
                    <p>Explore hosting resources</p>
                    <p>Visit our community forum</p>
                    <p>How to host responsibly</p>
                    </div>
                    <div className='footer-term-items'>
                    <div className='footer-head'>
                        <p>About</p>
                    </div>
                    <p>Newsroom</p>
                    <p>Learn about new features</p>
                    <p>Letter from our founders</p>
                    <p>Careers</p>
                    <p>Investors</p>
                    <p>Airbnb luxe</p>
                    </div>
                </div>
                <div className='footer-copyright'>
                <div className='copyright'>
                    <p>© 2025 Airbnb Clone, Amahle Hani.</p>
                    <p>   &bull;   Privacy  &bull;  Terms  &bull;  Sitemap</p>
                </div>
                <div className='footer-icons'>
                    <div className='language-currency'>
                    <LanguageOutlinedIcon fontSize="small" />
                    <p>English (UK)</p>
                    <p>R ZAR</p>
                    </div>
                    <div className='social-media-icons'>
                    <FacebookRoundedIcon fontSize='small' />
                    <TwitterIcon fontSize='small' />
                    <InstagramIcon fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LocationDetailsPage