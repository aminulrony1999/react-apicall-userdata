import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
     
    </div>
  );
}
function ExternalUsers(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
  }, []);
  return (
    <div>
      <h2>External Users</h2>
    </div>
  )
}
export default App;
