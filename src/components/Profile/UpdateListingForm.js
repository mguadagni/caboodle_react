import React, {useState, useEffect, useContext} from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';

const UpdateListingForm = ({query, updateForm, onSubmit}) => {

    const [data, setData] = useState({});
    const [auth] = useContext(AuthContext);

    const handleChange = (e) => {
        updateForm(e.target.id, e.target.value)
    }

    const handleSubmit = (e) => {
        onSubmit(e);
    }

    const navigate = useNavigate();

    const goBack = (e) => {
        navigate('/profile');
    }

    let { listingId } = useParams();

    useEffect(() => {
        const getListingInfo = async () => {
            try {
                const listingRes = await axios.get(`${apiHostUrl}/listings/${listingId}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`
                    }
                });
                setData(listingRes.data);
    
            } catch (error) {
            console.error(error.response ? error.response.data : error.message)
            }
        }
        getListingInfo();
        }, [])

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="item"
                        id="item"
                        placeholder="Item"
                        onChange={handleChange}
                        value={data.item}
                        required
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="price"
                        id="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={data.price}
                        required
                        type="number"
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="description"
                        id="description"
                        placeholder="Description"
                        onChange={handleChange}
                        value={data.description}
                        required
                    />
                </InLineInputContainer>
                <Button style={{marginTop: '1em'}}>Update Listing</Button>
                <Button onClick={goBack} style={{marginTop: '2em'}}>Go Back</Button>
            </Form>
        </Container>
    )
}

export default UpdateListingForm;