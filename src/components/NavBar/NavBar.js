import React, { Fragment, useContext} from 'react';
import NavButton from '../NavBar/NavButton';
import Profile from '../Profile/Profile';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = (props) => {

  const [auth] = useContext(AuthContext);

  return (
    <Fragment>
      <div style={{
        backgroundColor: "#DC143C",
        position: 'fixed',
        width: '100%',
        zIndex: 9999,
        top: 0,
        left: 0,
        height: '75px',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1 style={{
          fontFamily: "cursive",
          fontWeight: 'bold',
          fontSize: '2.5em',
          margin: "0 20px"
        }}>Caboodle</h1>
        <div style={{
          margin: '0 20px',
          flexDirection: 'row',
          background: "transparent",
          userSelect: "none",
          alignItems: 'center',
        }}>
           {auth.profile ? (
            <p style={{
              fontFamily: "cursive",
              fontSize: '0.9em'
            }}>{auth.profile.name}</p>
          ) : null}
            <NavButton to="/" label="Home" />
            {auth.profile ? (
              <Fragment> 
                <NavButton to="/listings" label="Listings" />
                <NavButton to="/profile" label="Profile" />
               </Fragment>
            ) : ( 
              <NavButton to="/login" label="Login" />
            ) }

        </div>
        </div>
      <div style={{height: '75px'}} />
    </Fragment>
  )
}

export default Navbar;