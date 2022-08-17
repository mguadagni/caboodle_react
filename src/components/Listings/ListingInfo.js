import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from '../Providers/AuthProvider';
import BorderCard from '../common/BorderCard';
import {useNavigate, useParams} from 'react-router-dom';
import Container from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";

const ListingInfo = (props) => {

    const [auth] = useContext(AuthContext);
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);

    const test = () => {
        console.log(`${listingId}`);
    }

    const navigate = useNavigate();

  const goBack = (e) => {
        navigate('/listings');
  }
  
  useEffect(() => {
    const getListingInfo = async () => {
        try {
            const listingRes = await axios.get(`${apiHostUrl}/listings/${listingId}`, {
                headers: {
                    Authorization: `Bearer ${auth.token}`
                }
            });
            setListing(listingRes.data);
            setLoading(false);
            // console.log(listing.data);

        } catch (error) {
        console.error(error.response ? error.response.data : error.message)
        }
    }
    getListingInfo();
    }, [])

  let { listingId } = useParams();

    return (
        <Container>
            {/* {test()}  */}
            <h1>Listing Information</h1>
            <h2>Item: {listing.item}</h2> 
            <h4>
                Price: {listing.price}
            </h4>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
        </Container>
    )
}

export default ListingInfo;