import React from "react";
import {Routes, Route} from "react-router-dom";
import Container from "../common/Container";
import Home from "../Home/Home";
import Listings from "../Listings/Listings";
import Login from "../Auth/Login";
import Profile from "../Profile/Profile";
import Navbar from "../NavBar/NavBar";

const AppRouter = () => {

    return (
        <Container>
            <Navbar />
            <h1>AppRouter</h1>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/listings" element={<Listings />} />
            </Routes>
        </Container>
    )
}

export default AppRouter