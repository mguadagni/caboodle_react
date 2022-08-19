import React from 'react';
import BorderCard from '../common/BorderCard';
import {useNavigate} from 'react-router-dom';

const ProfileListing = (props) => {

    const navigate = useNavigate();

    const onClick = () => {
        const listingId = props.listing.id;
        
        navigate(`/profileListings/${listingId}`);

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

export default ProfileListing;