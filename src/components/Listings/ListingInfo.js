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

  const buyItem = () => {
    alert('Success')
  }

  const tradeItem = () => {
    alert('Success')
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
        <h1>Listing Information</h1>
        <BorderCard style={{alignItems: "center"}}>
            {/* {test()}  */}
            
            <h2>Item: {listing.item}</h2> 
            <h4>
                Price: {listing.price}
            </h4>
            <div>
                <button style={{marginRight: '1em'}} onClick={buyItem}>Buy</button>
                <button style={{marginRight: '1em'}} onClick={tradeItem}>Trade</button>
                <button onClick={goBack} >Go Back</button>
            </div>
        </BorderCard>
        </Container>
    )
}

export default ListingInfo;