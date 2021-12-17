import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

function Navbar() {
  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  }, []);
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        boxShadow: '2px 2px 10px rgb(0,0,0,0.1)',
        padding: '0 40px',
        alignItems: 'center',
      }} className={styles.nav}>
        <h1 style={{
          borderRadius: '5px',
          padding: '10px',
          backgroundColor: 'rgb(22 130 202)',
          color: 'white',
        }} onClick={() => navigate('/')}>Pigeon</h1>
        <i class="fa fa-bars" onClick={(e) => {
          var x = document.getElementById("mcontainer");
          if (x.style.display === "block") {
            x.style.display = "none";
          } else {
            x.style.display = "block";
          }
        }}></i>
        <div className={styles.navItems}>
          {loggedIn ? (
            <>
              <button style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid',
                background: 'white',
                color: 'rgb(22 130 202)',
                marginRight: '10px',
                fontWeight: 'bold',
              }} onClick={(e) => {
                e.preventDefault();
                navigate('/aboutme');
              }}>About Me</button>
              <button style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid',
                fontWeight: 'bold',
                background: 'white',
                color: 'rgb(22 130 202)'
              }} onClick={(e) => {
                e.preventDefault();
                if (window.confirm('Don\'t forget to take a note of your login credentials before logging out')) {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user');
                  setLoggedIn(false);
                  navigate('/login');
                }
              }}>Logout</button>
            </>

          ) : (
            <div>
              <button style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid',
                background: 'white',
                color: 'rgb(22 130 202)',
                marginRight: '10px',
                fontWeight: 'bold',
              }} onClick={(e) => {
                e.preventDefault();
                navigate('/aboutme');
              }}>About Me</button>
              <button style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid',
                background: 'white',
                color: 'rgb(22 130 202)',
                marginRight: '10px',
                fontWeight: 'bold',
              }} onClick={(e) => {
                e.preventDefault();
                navigate('/login');
              }}>Login</button>
              <button style={{
                padding: '15px',
                borderRadius: '10px',
                border: '2px solid',
                fontWeight: 'bold',
                background: 'white',
                color: 'rgb(22 130 202)'
              }} onClick={(e) => {
                e.preventDefault();
                navigate('/create');
              }}>Sign Up</button>
            </div>
          )}
        </div>

      </div>
      <div className={styles.mobileContainer} id="mcontainer">
        {loggedIn ? (
          <div className={styles.mnavitems}>
            <button style={{
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid',
              background: 'white',
              color: 'rgb(22 130 202)',
              fontWeight: 'bold',
            }} onClick={(e) => {
              e.preventDefault();
              navigate('/aboutme');
            }}>About Me</button>
            <button style={{
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid',
              fontWeight: 'bold',
              background: 'white',
              color: 'rgb(22 130 202)'
            }} onClick={(e) => {
              e.preventDefault();
              if (window.confirm('Don\'t forget to take a note of your login credentials before logging out')) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                setLoggedIn(false);
                navigate('/login');
              }
            }}>Logout</button>
          </div>
        ) : (
          <div className={styles.mnavitems}>
            <button style={{
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid',
              background: 'white',
              color: 'rgb(22 130 202)',
              fontWeight: 'bold',
            }} onClick={(e) => {
              e.preventDefault();
              navigate('/aboutme');
            }}>About Me</button>
            <button style={{
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid',
              background: 'white',
              color: 'rgb(22 130 202)',
              fontWeight: 'bold',
            }} onClick={(e) => {
              e.preventDefault();
              navigate('/login');
            }}>Login</button>
            <button style={{
              padding: '15px',
              borderRadius: '10px',
              border: '2px solid',
              fontWeight: 'bold',
              background: 'white',
              color: 'rgb(22 130 202)'
            }} onClick={(e) => {
              e.preventDefault();
              navigate('/create');
            }}>Sign Up</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar
