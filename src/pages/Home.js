import React from 'react'
import { useNavigate } from 'react-router-dom';
import FAQs from '../components/FAQs';
import Messages from '../components/Messages';
import UserInfo from '../components/UserInfo';

function Home() {
  const [user, setUser] = React.useState();
  let navigate = useNavigate();
  React.useEffect(() => {
    document.title = 'Inbox | Pigeon';
    //console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token') === null) {
      navigate('/create');
    } else {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
  }, [navigate]);
  return (
    <div>

      <UserInfo id={user?._id} password={user?.password} />
      <Messages />
      <FAQs />
    </div>
  )
}

export default Home
