import React from "react";
import BorderCard from '../common/BorderCard';

const ListingInfo = (props) => {

    const test = () => {
        console.log(props);
    }

    return (
        <div>
        <h1>Listing Info</h1>
        {test()}
        </div>
        // <BorderCard>
        //     <h1>Listing Info</h1>
        //     <h3>{props.listing.item}</h3> 
        //     <h4 style={{marginTop: "1px"}}>
        //         Price: {props.listing.price}
        //     </h4>
        // </BorderCard>
    )
}

export default ListingInfo;