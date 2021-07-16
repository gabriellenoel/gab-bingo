import logo from './logo.svg';
import './App.css';
import BingoCard from './components/BingoCard';
import Itinerary from './components/Itinerary';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function App() {

  return (
      <div className="app">
        <BingoCard /> 
        <br /><br />
      </div>
  );
}

export default App;
