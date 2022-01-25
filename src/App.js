import './App.css';
import { useState } from 'react';

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
      <button className="header__btn" onClick={updateQuote}>Update quote from Kanye West</button>
      <div className="quote">{quote}</div>
    </div>
  );
}

export default App;
