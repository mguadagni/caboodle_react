import React, {useContext} from 'react';
import BorderCard from '../common/BorderCard';
import Container from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';

const Profile = (props) => {

    const [auth] = useContext(AuthContext);

    const test = () => {
        console.log(auth.profile.name);
    }

    return (
        <Container>
            <h1>Profile Page</h1>
            {test()}
            <BorderCard>
                <h2> Name: {auth.profile.name} </h2>
                <h4 style={{marginTop: "1px"}}>Age: {auth.profile.age} </h4>
            </BorderCard>
            {/* <p>{auth.profile.fname}</p> */}
        </Container>

    )
}
export default Profile;