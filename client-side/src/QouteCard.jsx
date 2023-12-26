// QouteCard.js
import './QouteCard.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './twit.png';
const QouteCard = () => {
  const [quote, setQuote] = useState(null);

  const fetchNewQuote = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api');
      setQuote(response.data);
    } catch (error) {
      console.error('Error fetching :', error.message);
    }
  };



  const handleTwitterShare = async (req,res) => {
    try {
      await axios.post('http://localhost:8000/api/share/twitter', {
      text: quote.content, // Include the quote text in the request body
    });
      alert(
        "message Success!!"
      );
      console.log('Message sent to Node.js for Twitter sharing.');
    } catch (error) {
      console.error('Error sending message to Node.js:', error.message);
      alert(
        "message Sending Failed!!"
      );
    }
  };


  useEffect(() => {
    fetchNewQuote();
  }, []);




  
  return (
    <div id="card">
      <header>Quotes of the day</header>
      <div className="content">
        <div className="quote-area">
          <i className="fas fa-quote-left"></i>
          {quote ? (
            <p className="quote">"{quote.content}"</p>
          ) : (
            <p className="quote">"Finding zen in chaos'".</p>
          )}
          <i className="fas fa-quote-right"></i>
        </div>

        {quote && (
          <div className="author">
            <span>_</span>
            <span className="name">@{quote.author}</span>
          </div>
        )}
      </div>
      <div className="buttons">
        <div className="features">
          <button onClick={handleTwitterShare}>
            <img src={logo} alt="." />
          </button>
          <button onClick={fetchNewQuote}>New-Quote</button>
        </div>
      </div>
    </div>
  );
};

export default QouteCard;
