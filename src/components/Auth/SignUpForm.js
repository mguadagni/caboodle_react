import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useRef, useState, useEffect} from 'react';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}/;

const SignUpForm = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const handleChange = (e) => {
        props.updateForm(e.target.id, e.target.value)
    }

    return (
        <Container>
            <Form onSubmit={props.onSubmit} style={{marginTop: '2em'}}>
                <h1>Create a User!</h1>
                <InLineInputContainer>
                    <Input 
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={props.query.id}
                    onChange={handleChange}
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '0.25em'}}>
                    <Input 
                    name="id"
                    id="id"
                    placeholder="Username"
                    value={props.query.id}
                    onChange={handleChange}
                    />
                </InLineInputContainer>
                <InLineInputContainer style={{marginTop: '0.25em'}}>
                    <Input 
                    name="password"
                    id="password"
                    placeholder="Password"
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