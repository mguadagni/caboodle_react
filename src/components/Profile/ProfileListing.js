import React from 'react';
import BorderCard from '../common/BorderCard';

const ProfileListing = () => {
    return (
        <BorderCard>
            <h3>{props.listing.item}</h3> 
            <h4 style={{marginTop: "1px"}}>
                Price: {props.listing.price}
            </h4>
        </BorderCard>
    )
}

export default ProfileListing;