import React from 'react'
import { SyncLoader } from 'react-spinners';
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
    setIsLoading(true);
    fetch(apiConfig.url + '/message/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(res => {
        //console.log(res);
        if (res.success) {
          setMessages(res.data);
          setIsLoading(false);
        }
        else {
          if (res.message === "auth token is not valid") {
            fetch(apiConfig.url + '/user/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: JSON.parse(localStorage.getItem('user'))._id,
                password: JSON.parse(localStorage.getItem('user')).password
              })
            })
              .then(res => res.json())
              .then(res => {
                if (res.success) {
                  localStorage.setItem('token', res.data.token);
                  localStorage.setItem('user', JSON.stringify(res.data.user));
                  setIsLoading(false);
                } else {
                  setIsLoading(false);
                  alert(res.message);
                }
              })
              .catch(err => {
                //console.log(err);
              })
          }
        }
      })
      .catch(err => {
        //console.log(err);
        setIsLoading(false);
      });
  }, [refresh]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      setIsLoading(true);
      fetch(apiConfig.url + '/message/delete/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
      })
        .then(res => res.json())
        .then(res => {
          // console.log(res);
          if (res.success) {
            setRefresh(!refresh);
          } else {
            setIsLoading(false);
          }
        })
    }
  }
  return (
    <div className={styles.card}>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <h1 style={{ marginBottom: "0" }}>Your Messages</h1>
        <i class={`fa fa-refresh ${styles.ref}`} style={{ fontSize: "30px" }} onClick={(e) => setRefresh(!refresh)}></i>
      </div>

      <p>{messages.length} messages</p>
      <hr style={{
        marginBottom: "30px"
      }} />
      {isLoading ? <div style={{ textAlign: "center", margin: "40px 0" }}>
        <SyncLoader color="rgb(22, 130, 202)" />
      </div> :
        <div>
          {messages.length === 0 && <p>Share the above link with your friends to receive messages 🚀</p>}
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
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                    <div className="grow" onClick={(e) => handleDelete(message._id)}>
                      <i class="fa fa-trash-o" style={{
                        fontSize: "20px"
                      }}></i>
                    </div>
                    <p style={{
                      textAlign: 'right',
                    }}>{date.getHours()}:{date.getMinutes()}<br />{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}</p>
                  </div>
                </div>
              )
            })

          }
        </div>}

    </div>
  )
}

export default Messages
