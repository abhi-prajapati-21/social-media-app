import { useEffect } from 'react';
import '../node_modules/react-bootstrap/dist/react-bootstrap.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Container from 'react-bootstrap/Container'

import './App.css';
import AllRoutes from './AllRoutes'
import NavBar from './Components/NavBar/NavBar.jsx';
import { setCurrentUser } from './Actions/currentUser.js';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
   }, [])

  return (
    <Container fluid="lg" className="App ">
      <Router>
        <NavBar />
        <AllRoutes />
      </Router>
    </Container>
  );
}

export default App;
