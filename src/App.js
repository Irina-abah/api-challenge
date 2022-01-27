import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

function App() {

  const [quote, setQuote] = useState('');

  function updateQuote() {
  
  fetch('https://api.kanye.rest')
  .then(res => res.json())
  .then((data) => {
    setQuote(data.quote)
  })
  .catch((err) => console.log(err));
  }


  return (
    <div className="container">
      <Button className="header__btn" onClick={updateQuote}>Update quote from Kanye West</Button>
      <div className="quote">{quote}</div>
    </div>
  );
}

const Button = styled.button`
font-size: 1em;
width: 200px;
height: 70px;
background-color: #ffdb4d;
border-radius: 2px;
cursor: pointer;
align-self: center; 
`

export default App;
