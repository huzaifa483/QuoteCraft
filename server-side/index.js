const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 4000;
const key = process.env.API_KEY;
const keySec = process.env.API_KEY_SECRET;
const keyTk = process.env.ACCESS_TOKEN;
const keyTs = process.env.ACCESS_TOKEN_SECRET;

const TwitterClient = new TwitterApi(
   {
   appKey:key,
   appSecret:keySec,
   accessToken:keyTk,
   accessSecret:keyTs
  }
 );



app.use(cors());
app.use(express.json());

app.get('/api', async (req, res) => {
  try {
    const quote = await fetchRandomQuote();
    res.json(quote);
  } catch (error) {
    console.error('Error fetching quote:', error.message);
    res.status(500).json({ error: 'Unable to fetch a quote at the moment.' });
  }
});

async function fetchRandomQuote() {
  const response = await axios.get('https://api.quotable.io/random');
  currentTweet = response.data;
  return response.data;
}



app.post('/api/share/twitter', async (req, res) => {
  console.log(req.body.text);
  const tweetText = req.body.text || 'hello from node';

  console.log(`Message to share on Twitter: ${tweetText}`);

  try {
    const tweet = await TwitterClient.v2.tweet(tweetText);
    console.log('Tweet posted successfully:', tweet);
    res.status(200).send('Tweet posted successfully.');
    //alert("successfull-Tweet!!");
  } catch (error) {
    console.error('Error posting tweet:', error);
    res.status(500).send('Error posting tweet.');
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
