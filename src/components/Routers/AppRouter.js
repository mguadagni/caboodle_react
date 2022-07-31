import React from "react";
import {Routes, Route} from "react-router-dom";
import Container from "../common/Container";
import Home from "../Home/Home";
import Listings from "../Listings/Listings";
import Login from "../Auth/Login";
import Profile from "../Profile/Profile";
import Navbar from "../NavBar/NavBar";
import SignUp from '../Auth/SignUp';

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
            </Routes>
        </Container>
    )
}

export default AppRouter