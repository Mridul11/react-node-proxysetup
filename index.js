import express  from "express"
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'


const app = express();

//app.use(express.static(path.join(__dirname + '../client/build')))
app.use(morgan("combined"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
//app.use(cors())

const port = 3001;

app.get("/api/hello", function(req,res){
    res.status(201).send({ word : "Hello world!!!" })
});

app.listen(port || process.env.PORT, () => console.log("listening on port 3001"));