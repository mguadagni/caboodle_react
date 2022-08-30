import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from '../Providers/AuthProvider';
import BorderCard from '../common/BorderCard';
import {useNavigate, useParams} from 'react-router-dom';
import Container from "../common/Container";
import axios from "axios";
import { apiHostUrl } from "../../config";
import img from "../Listings/CreateListingForm"

const ListingInfo = (props) => {

    const [auth] = useContext(AuthContext);
    const [listing, setListing] = useState({});
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState("");
    const [img, setImg] = useState();

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
            // console.log(listingRes.data.profile.user.username);
            setUsername(listingRes.data.profile.user.username);

        } catch (error) {
            console.error(error.response ? error.response.data : error.message)
        }
    }
    getListingInfo();
    }, [])
    
    useEffect(() => {
        const getPicture = async () => {
            try {
                const pictureRes = await axios.get(`${apiHostUrl}/listings/${listingId}/picture`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setImg(URL.createObjectURL(new Blob(pictureRes)));
                console.log(img);

            } catch (error) {
                console.error(error.response ? error.response.data : error.message)
            }
        }
        getPicture();
    }, [])

  let { listingId } = useParams();

  const test = () => {
    console.log(listing);
}

    return (
        <Container>
        <h1>Listing Information</h1>
        <BorderCard style={{alignItems: "center"}}>
            {test()} 
            
            <h2>Item: {listing.item}</h2> 
            <h3>Posted by: {username}</h3>
            <img src={img} />
            <h3>Description: </h3>
            <h3 style={{marginTop: "0.1px", textAlign: "center"}}>{listing.description}</h3>
            <h4>
                Price: ${listing.price}
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