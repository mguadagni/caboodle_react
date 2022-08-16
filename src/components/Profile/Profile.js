import React, {useContext} from 'react';
import BorderCard from '../common/BorderCard';
import Container from '../common/Container';
import { AuthContext } from '../Providers/AuthProvider';
import ProfileListings from './ProfileListings';

const Profile = (props) => {

    const [auth] = useContext(AuthContext);

    const test = () => {
        console.log(auth.profile.name);
    }

    return (
        <Container>
            <h1>Profile Page</h1>
            {/* {test()} */}
            <BorderCard style={{textAlign: "center", width:"40%"}}>
                <h2> Name: {auth.profile.name} </h2>
                <h3 style={{marginTop: "1px"}}>Username: {auth.profile.user.username}</h3>
                <h3 style={{marginTop: "1px"}}>Email: {auth.profile.user.email}</h3>
                <h4 style={{marginTop: "1px"}}>Age: {auth.profile.age} </h4>
            </BorderCard>
            <h2 style={{marginTop: "2em"}}>Current Listings</h2>
            <ProfileListings />
        </Container>

    )
}
export default Profile;