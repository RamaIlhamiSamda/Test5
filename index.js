const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
const port = 3000
app.use(router)


router.get('/', (req, res) => {
  res.send('App is running..');
  // console.log("test")
  // res.status(200).json({
  //   message : "test"
  // })
});

app.listen(port,()=>{
  console.log(`app is listening on port ${port}`)
})
router.get('/tokoo',(req,res)=>{
  // res.render('index.ejs')
  res.render('indexx.ejs')
})

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);