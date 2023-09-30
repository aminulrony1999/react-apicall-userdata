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
    .then(user => setUsers(user))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
      <p>{users.length}</p>
    </div>
  )
}
export default App;
