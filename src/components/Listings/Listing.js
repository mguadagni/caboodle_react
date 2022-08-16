import React, {useState} from "react";
import BorderCard from '../common/BorderCard';
import BorderCardAdv from '../common/BorderCardAdv';
import {useNavigate} from 'react-router-dom';

const Listing = (props) => {

    const [listingId, setListingId] = useState();

    const navigate = useNavigate();

    const onClick = () => {
        const listingId = props.listing.id;
        navigate('/listings/:listingId');

        console.log(listingId);
    }

    return (
            <BorderCard onClick={onClick}>
                <h3>{props.listing.item}</h3> 
                <h4 style={{marginTop: "1px"}}>
                    Price: ${props.listing.price}
                </h4>
            </BorderCard>
    )
}

export default Listing;