import React from 'react'
import styles from '../styles/messages.module.css';
import apiConfig from '../utils/apiConfig';

var color,
  letters = '0123456789ABCDEF'.split('')
function AddDigitToColor(limit) {
  color += letters[Math.round(Math.random() * limit)]
}
function GetRandomColor() {
  color = '#'
  AddDigitToColor(5)
  for (var i = 0; i < 5; i++) {
    AddDigitToColor(10)
  }
  return color
}
function Messages() {
  const [messages, setMessages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [refresh, setRefresh] = React.useState(false);

  React.useEffect(() => {
    fetch(apiConfig.url + '/message/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.success) {
          setMessages(res.data);
        }
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, [refresh]);
  return (
    <div className={styles.card}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <h1>Your Messages</h1>
        <i class={`fa fa-refresh ${styles.ref}`} style={{ fontSize: "30px" }} onClick={(e) => setRefresh(!refresh)}></i>
      </div>
      <hr style={{
        marginBottom: "30px"
      }} />
      {messages.length===0 && <p>You don't have any new messages, share the above link with your friends</p>}
      {
        messages?.map(message => {
          var date = new Date(message.createdAt);
          return (
            <div key={message._id} style={{
              backgroundColor: GetRandomColor(),
              padding: '20px',
              borderRadius: '10px',
              color: 'white',
              margin: '20px 0'
            }}>
              <p style={{
                fontSize: '20px',
              }}>{message.text}</p>
              <p style={{
                textAlign: 'right',
              }}>{date.getHours()}:{date.getMinutes()}<br />{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
            </div>
          )
        })

      }
    </div>
  )
}

export default Messages
