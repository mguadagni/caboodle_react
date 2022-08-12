import React from "react";
import BorderCard from '../common/BorderCard';
import BorderCardAdv from '../common/BorderCardAdv';

const Listing = (props) => {

    const onClick = () => {
        alert("Successful")
    }

    return (
            <BorderCard onClick={onClick}>
                <h3>{props.listing.item}</h3> 
                <h4 style={{marginTop: "1px"}}>
                    Price: {props.listing.price}
                </h4>
            </BorderCard>
    )
}

export default Listing;