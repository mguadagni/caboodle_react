import React, {useContext, useState} from "react";
import { AuthContext } from '../Providers/AuthProvider';
import BorderCard from '../common/BorderCard';
import {useNavigate, useParams} from 'react-router-dom';
import Container from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";

const ListingInfo = (props) => {

    const [auth] = useContext(AuthContext);

    const test = (props) => {
        console.log(props.listingId);
    }

    const navigate = useNavigate();

  const goBack = (e) => {
        navigate('/listings');
  }

  const displayListingInfo = async () => {
    try {
        const listing = await axios.get(`${apiHostUrl}/listings/2`, {
            headers: {
                Authorization: `Bearer ${auth.token}`
              }
        });
        console.log(listing.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message)
    }
  }

  let { listingId } = useParams();

    return (
        <Container>
            <div>
            {/* <h1>Listing Info</h1> */}
            <h1>{listingId}</h1>
            {/* {test()}  */}
            </div>
            <div>
                <button onClick={goBack}>Go Back</button>
            </div>
            {/* {displayListingInfo()} */}
            {/* <BorderCard>
                <h1>Listing Info</h1>
                <h3>{props.listing.item}</h3> 
                <h4 style={{marginTop: "1px"}}>
                    Price: {props.listing.price}
                </h4>
            </BorderCard> */}
        </Container>
    )
}

export default ListingInfo;