const app = require('./app');
app.use('/api/v1',(req,res)=>{
  res.json({hi:'his this is text'})
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
