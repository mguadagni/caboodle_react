import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const CreateListingForm = ({query, updateForm, onSubmit}) => {

    const handleChange = (e) => {
        updateForm(e.target.id, e.target.value)
    }

    const handleSubmit = (e) => {
        onSubmit(e);
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
                <Button style={{marginTop: '1em'}}>Create Listing</Button>
            </Form>
        </Container>
    )
}

export default CreateListingForm;