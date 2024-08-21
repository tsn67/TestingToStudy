import express, { urlencoded } from "express";
import bodyParser from 'body-parser';

const port = 3000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("The server has started at port "+port);
});


function generateRandome() {
    return Math.floor(Math.random() * 100);
}


app.get("/", (req, res) => {
    //some other code goes here
    res.render("index.ejs",{
        number: -1 
    });
});


app.post("/getNum", (req, res) => {
    res.render("index.ejs", {
        number: generateRandome()
    })
});