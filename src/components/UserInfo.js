import copy from 'copy-text-to-clipboard';
import React from 'react'
import styles from '../styles/userInfo.module.css';

function UserInfo({
  id,
  password
}) {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return (
    <div className={styles.card}>
      <h1>User Info 🔷</h1>
      <h2>{user.name}</h2>
      <hr />
      <p><span className={styles.id}
        style={{ marginRight: "8px" }}>ID: </span><span className={styles.id}>{id}</span></p>
      <p><span className={styles.pass}
        style={{ marginRight: "8px" }}>PASSWORD: </span><span className={styles.pass}>{password}</span></p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px"
      }}>
        <p style={{
          margin: "0 20px 0 0",
          padding: "20px",
          border: "1px solid rgb(22, 130, 202)",
          borderRadius: "5px",
          width: "100%",
          overflow: "auto"
        }}>{window.location.origin}/#/message/{id}</p>
        <button style={{
          padding: "20px",
          backgroundColor: "rgb(22, 130, 202)",
          border: "none",
          borderRadius: "5px",
          color: "white",
          fontWeight: "bold",
          display: "flex",
        }}
          className={styles.cpbtn}
          onClick={(e) => { copy(`${window.location.origin}/#/message/${id}`); alert("Link copied to clipboard!") }}>
          Copy <i class="fa fa-copy" style={{ marginLeft: "5px" }}></i>
        </button>
      </div>
      <button className={styles.wpbtn} onClick={(e) => {
        window.open(`whatsapp://send?text=✉%EF%B8%8F💬💌%0D%0ASend+Secret+Message+to+me+🤩!+I+will+never+know+who+sent+me+which+message.+%0D%0AIt%27s+fun!+Try+here+👉+https://pigeon.rocks/%23/message/${id}`)
      }}>Share on WhatsApp <i class="fa fa-whatsapp" style={{
        fontSize: "24px",
        marginLeft: "5px"
      }}></i>
      </button>
      {/* <button className={styles.fbbtn}>Share on Facebook <i class="fa fa-facebook"></i></button> */}
    </div>
  )
}

// /`${window.location.origin}/#/message/${id}`
export default UserInfo
