import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( () => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
      {
        users.map(user => <User name = {user.name} email={user.email} city={user.address.city}></User>)
      }
    </div>
  )
}

function User(props){
  return (
    <div style ={{backgroundColor: 'lightpink',padding : '15px', border : '3px solid maroon', margin : '15px',borderRadius: '200px'}}>
      <h3>Name : {props.name}</h3>
      <h4>Email : {props.email}</h4>
      <h5>City : {props.city}</h5>
    </div>
  )
}
export default App;
