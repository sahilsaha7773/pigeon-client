import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import styles from '../styles/sendMsg.module.css';
import apiConfig from '../utils/apiConfig';

function SendMessage() {
  let navigate = useNavigate();
  const [message, setMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();
  React.useEffect(() => {
    document.title = 'Send Message | Pigeon';
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);
  const handleSend = async (e) => {
    // console.log(id);
    e.preventDefault();
    if (message.length === 0) {
      alert('Please enter a message');
      return;
    }
    setIsLoading(true);
    fetch(apiConfig.url + '/message/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: message,
        user: id
      })
    })
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        setMessage('');
        if (res.success) {
          alert('Message sent successfully');
          navigate('/create');
        } else {
          alert(res.messsage);
        }
      })
      .catch(err => {
        setIsLoading(false);
        alert(err);
      });
  }
  return (
    <div>
      <div className={styles.form}>
        <h2>Message your friend Secretly 😉, they will never know who messaged them.🚀</h2>
        <hr />
        {isLoading ?
          <div style={{ textAlign: 'center', margin: "40px 0" }}>
            <SyncLoader color="rgb(22, 130, 202)" />
          </div> :
          <div>
            <textarea type="text" rows={4} placeholder="Type your message here" value={message}
              onChange={(e) => setMessage(e.target.value)} />
            <button onClick={handleSend}>Send Secret Message 😎</button>
          </div>}
      </div>
      <div className={styles.form}>
        <h2> Message your friend anonymously, they will never know who sent the message.😎
          This website is just for fun. Do not go out of your way to spread hate.🙅‍♂️🙅‍♀️</h2>
      </div>
    </div>
  )
}

export default SendMessage
