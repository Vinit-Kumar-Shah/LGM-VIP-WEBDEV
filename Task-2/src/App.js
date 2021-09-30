import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarComp } from './nav';
import { CardComp } from './cards';
import { Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App(props) {
  
  const [isUser, setIsUser] = useState(false);
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false)
  const delay = 5;
  const getUsers = () =>{
      axios.get('https://reqres.in/api/users?page=1')
        .then((user) => {
          setIsUser(true)
          setUserList(user.data.data)
        })
        .catch((error) => {
          setError(error.response.data)
        })
      }
      const [show, setShow] = useState(false);

      useEffect(
        () => {
          let timer1 = setTimeout(() => setShow(true), delay * 1000);
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );
  return show ? (
    <div className="App">
    <NavbarComp onClick={getUsers} />
    <div className={isUser ? "center-area d-none" : "center-area"}>
      <h1> Hey There! Welcome to Users Fetching Page  </h1>
      <h2> Press The "GET USERS" Button to fetch Users </h2>
    </div>
    <Container className={isUser ? "users-container" : "d-none"} style={{marginTop: "5%"}}>
    <Row>
      {error ? error : userList.map((user,index) => {
        return (
          <CardComp 
            key={index}
            imgSrc={user.avatar}
            firstName={user.first_name}
            lastName={user.last_name}
            email={user.email}
            userId={user.id}
          />)
      })}
    </Row>
    </Container>
  </div> ):
  (
    <div id="main" align="center">
      <img
        src="https://acegif.com/wp-content/uploads/loading-9.gif"
        alt="Loaading..."
        className="loader"
      />
    </div>
  );
}

export default App;