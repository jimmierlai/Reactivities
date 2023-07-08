import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
<<<<<<< HEAD

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
    .then(response => {
      console.log(response)
      setActivities(response.data)
    }) 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {activities.map((activity: any) => (
            <li key={activity.id}>
              {activity.title}
            </li>
          ))}
        </ul>
      </header>
=======
import { Header, List, Button } from 'semantic-ui-react';

function App() {
const [activities, setActivities] = useState([]);

useEffect(() => {
  axios.get('http://localhost:5000/api/activities')
    .then(response => {
      console.log(response);
      setActivities(response.data);
    })
}, [])

  return (
    <div>
        <Header as='h2' icon='users' content='Reactivities' />
        <List>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </List>
>>>>>>> 5592ca1dba5331dfd4905125d8f7d27f9af62526
    </div>
  );
}

export default App;
