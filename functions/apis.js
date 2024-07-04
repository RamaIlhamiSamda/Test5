const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const port = 3000

router.get('/toko', (req, res) => {
  res.send('App is running..');
});

router.listening(port,()=>{
  console.log(`app is listening on port ${port}`)
})
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);