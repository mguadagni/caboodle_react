import React, {useState} from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useNavigate} from 'react-router-dom';

const CreateListingForm = ({query, updateForm, onSubmit}) => {

    const [img, setImg] = useState();

    const handleChange = (e) => {
        updateForm(e.target.id, e.target.value)
    }

    const handleFileChange = (e) => {
        updateForm(e.target.id, e.target.value)
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
    }

    const handleSubmit = (e) => {
        onSubmit(e);
      }

    const navigate = useNavigate();

    const goBack = (e) => {
    navigate('/listings');
  }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="item"
                        id="item"
                        placeholder="Item"
                        onChange={handleChange}
                        value={query.item}
                        required
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="price"
                        id="price"
                        placeholder="Price"
                        onChange={handleChange}
                        value={query.price}
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
                        value={query.description}
                        required
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '1em'}}>
                    <Input
                        name="picture"
                        id="picture"
                        placeholder="Picture"
                        onChange={handleFileChange}
                        value={query.picture}
                        required
                        type="file"
                        accept="image/jpg, image/png"
                    />
                </InLineInputContainer>
                <Button style={{marginTop: '1em'}}>Create Listing</Button>
                <Button onClick={goBack} style={{marginTop: '2em'}}>Go Back</Button>
            </Form>
            <img src={img} />
        </Container>
    )
}

export default CreateListingForm;