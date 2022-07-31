import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const SignUpForm = (props) => {

    const handleChange = (e) => {
        props.updateForm(e.target.id, e.target.value)
    }

    return (
        <Container>
            <Form onSubmit={props.onSubmit} style={{marginTop: '2em'}}>
                <InLineInputContainer>
                    <Input 
                    name="id"
                    id="id"
                    placeholder="Username"
                    value={props.query.id}
                    onChange={handleChange}
                    />
                </InLineInputContainer>
                <Button>Sign Up</Button>
            </Form>
        </Container>
    )
}
export default SignUpForm;