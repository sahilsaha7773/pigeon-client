import React from 'react'
import styles from '../styles/create.module.css';
import loginillu from '../images/loginillu3.svg';
import { Link, useNavigate } from 'react-router-dom';
import apiConfig from '../utils/apiConfig';
import { SyncLoader } from 'react-spinners';
import FAQs from './FAQs';

function Create() {
  let navigate = useNavigate();
  const [name, setName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    document.title = 'Create | Pigeon';
    if (localStorage.getItem('token')) {
      navigate('/')
    }
  }, [navigate]);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert('Please enter a name');
      return;
    }
    setIsLoading(true);
    fetch(apiConfig.url + '/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('user', JSON.stringify(res.data));
          window.location.reload();
        } else {
          alert(res.message);
        }
        setIsLoading(false);
      })
  }
  return (
    <><div className={styles.card}>
      <img src={loginillu} alt="Illustration" style={{
        width: '50%',
        margin: '20px auto'
      }} />
      <h2>Get anonymous messages from your friends and family</h2>
      <h3 style={{ fontWeight: 'normal' }}>You can never know who messaged you!🔮</h3>
      {isLoading ?
        <div style={{ textAlign: 'center', margin: "40px 0" }}>
          <SyncLoader color="rgb(22, 130, 202)" />
        </div> :
        <div>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleCreate}>Create Your Link <span style={{ marginLeft: '5px' }}>😎</span></button>
          <p>Already have a link?<Link to='/login'>Login here</Link></p>
        </div>}

    </div><FAQs /></>
  )
}

export default Create
