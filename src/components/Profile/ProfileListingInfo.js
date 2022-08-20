import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from '../Providers/AuthProvider';
import BorderCard from '../common/BorderCard';
import {useNavigate, useParams} from 'react-router-dom';
import Container from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";

const ProfileListingInfo = () => {

    const [auth] = useContext(AuthContext);
    const [profileListing, setProfileListing] = useState({});

    const navigate = useNavigate();

    const goBack = (e) => {
        navigate('/profile');
  }

  const updateListing = () => {
    alert('Success')
  }

  const deleteListing = () => {
    alert('Success')
  }

  useEffect(() => {
    const getListingInfo = async () => {
        try {
            const profileListingRes = await axios.get(`${apiHostUrl}/listings/${listingId}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setProfileListing(profileListingRes.data);

        } catch (error) {
        console.error(error.response ? error.response.data : error.message)
        }
    }
    getListingInfo();
    }, [])

    let { listingId } = useParams();

    return (
        <Container>
            <h1>Listing Information</h1>
            <BorderCard style={{alignItems: "center"}}>
            <h2>Item: {profileListing.item}</h2>
            <h3>Description: </h3>
            <h3 style={{marginTop: "0.1px", textAlign: "center"}}>{profileListing.description}</h3>
            <h4>
                Price: {profileListing.price}
            </h4>
            <div>
                <button style={{marginRight: '1em'}} onClick={updateListing}>Update</button>
                <button style={{marginRight: '1em'}} onClick={deleteListing}>Delete</button>
                <button onClick={goBack} >Go Back</button>
            </div>
        </BorderCard>
        </Container>
    )
}

export default ProfileListingInfo;