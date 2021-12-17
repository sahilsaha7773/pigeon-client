import React from 'react'
import styles from '../styles/login.module.css';
import apiConfig from '../utils/apiConfig';
import { Link, useNavigate } from "react-router-dom";
import loginillu from '../images/loginillu3.svg';
import { SyncLoader } from 'react-spinners';
import FAQs from './FAQs';

function Login() {
  let navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    document.title = "Login | Pigeon";
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);
  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === '' || password === '') {
      alert('Please fill in all fields');
      return;
    }
    setIsLoading(true);
    fetch(apiConfig.url + '/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: username,
        password: password
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data.user));
          window.location.reload();
        } else {
          setIsLoading(false);
          alert(res.message);
        }
      })
      .catch(err => {
        // console.log(err);
      })
  }
  return (
    <>
      <div className={styles.loginForm}>
        <img src={loginillu} alt="Illustration" style={{
          width: '50%',
          margin: '20px auto'
        }} />
        <h2>Login to view your messages 📬</h2>
        {isLoading ?
          <div style={{ textAlign: 'center', margin: "40px 0" }}>
            <SyncLoader color="rgb(22, 130, 202)" />
          </div> :
          <div>
            <input type="text" placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account or forgot the credentials? <Link to='/create'>Create one.</Link></p>
          </div>}

      </div>
      <FAQs />
    </>
  )
}

export default Login
