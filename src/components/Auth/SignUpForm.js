import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InLineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';
import {useRef, useState, useEffect} from 'react';

const SignUpForm = ({onSubmit, onChange, newUser}) => {

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
    }

    return (
        <Container>
            <h1>Fill in to create a new user!</h1>
            <Form onSubmit={onSubmit}>
                <InLineInputContainer>
                    <Input 
                    name="fName"
                    id="fName"
                    value={newUser.fName}
                    placeholder={"First Name*"}
                    onChange={handleChange}
                    required
                    />
                    <Input 
                    name="lName"
                    id="lName"
                    value={newUser.lName}
                    placeholder={"Last Name*"}
                    onChange={handleChange}
                    required
                    />
                    <Input 
                    name="age"
                    id="age"
                    value={newUser.age}
                    placeholder={"Age"}
                    onChange={handleChange}
                    type="number"
                    />
                </InLineInputContainer>
                <InLineInputContainer>
                    <Input 
                    name="email"
                    id="email"
                    value={newUser.email}
                    placeholder={"Email Address*"}
                    onChange={handleChange}
                    type="email"
                    required
                    />
                </InLineInputContainer>
                <InLineInputContainer>
                    <Input 
                    name="username"
                    id="username"
                    value={newUser.username}
                    placeholder={"Username*"}
                    onChange={handleChange}
                    required
                    />
                </InLineInputContainer>
                <InLineInputContainer>
                    <Input 
                    name="password"
                    id="password"
                    value={newUser.password}
                    placeholder={"Password*"}
                    onChange={handleChange}
                    type="password"
                    required
                    />
                </InLineInputContainer>
                <p>* = Required Fields</p>
                <Button style={{marginTop: '1em'}}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}
export default SignUpForm;