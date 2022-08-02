import React, {useState, useContext} from 'react';
import Container from '../common/Container';
import SignUpForm from './SignUpForm';
import {useNavigate} from 'react-router-dom';

const SignUp = () => {

    const [query, setQuery] = useState({
        id:""
    })

    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]:value
        })
    }

    const navigate = useNavigate();

    const onSubmit = () => {
        navigate('/signup');
    }

    return (
            <SignUpForm onSubmit={onSubmit} query={query} updateForm={updateForm}/>
    )
}

export default SignUp;