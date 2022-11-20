const express = require("express");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const app = express();
app.use(express.json())
const PORT = process.env.PORT ?? 3000;



app.use('/api',userRouter)
app.use('/api',postRouter)
app.get("/",(req,res)=>{
  res.send("Ok");
})



app.listen(PORT, (req, res) => {
  console.log(`${PORT} is started`);
});
