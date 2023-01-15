const express = require("express")
const bodyParser = require("body-parser")


const app = express();
app.set("view engine", "ejs");
app.use("/static", express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
	res.render("login");
});

app.post("/", (req, res)=>{
	const userName = req.body["username"];
	const userPassword = req.body["password"];
	if(userName=="mehmetaziz" && userPassword=="2121"){
		res.render("home", {userName: userName});
	}else{
		res.send("Error")
	}
});


app.listen(3000);