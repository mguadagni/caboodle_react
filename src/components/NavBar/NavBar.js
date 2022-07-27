import React, { Fragment} from 'react';
import NavButton from '../NavBar/NavButton';

const Navbar = (props) => {

  return (
    <Fragment>
      <div style={{
        backgroundColor: "#6A5ACD",
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
            <NavButton to="/" label="Home" />
            <NavButton to="/login" label="Login" />
            <NavButton to="/listings" label="Listings" />
            <NavButton to="/profile" label="Profile" />
            
        </div>
        </div>
      <div style={{height: '75px'}} />
    </Fragment>
  )
}

export default Navbar;