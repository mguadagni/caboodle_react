import React from "react";
import {Routes, Route} from "react-router-dom";
import Container from "../common/Container";
import Home from "../Home/Home";
import Listings from "../Listings/Listings";
import Login from "../Auth/Login";
import Profile from "../Profile/Profile";
import Navbar from "../NavBar/NavBar";
import SignUp from '../Auth/SignUp';
import CreateListing from '../Listings/CreateListing';
import ListingInfo from "../Listings/ListingInfo";
import Listing from "../Listings/Listing";

const AppRouter = () => {

    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/listings" element={<Listings />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/createListing" element={<CreateListing />} />
                {/* <Route path="/listingInfo" element={<ListingInfo />} /> */}
                <Route path="/listings/:listingId" element={<ListingInfo />} />
            </Routes>
        </Container>
    )
}

export default AppRouter