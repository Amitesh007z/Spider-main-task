import express from "express";
import bodyParser from "body-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import session from "express-session";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));


let users = {}; 

app.get("/", (req, res) => {
  if (req.session.user) {
    res.sendFile(join(__dirname, "index.html"));
  } else {
    res.sendFile(join(__dirname, "log.html"));
  }
});


/*function passwordCheck(req, res, next) {
  const password = req.body["password"];
  const userN = req.body["USERNAME"];
  if(users[userN] && users[userN] === password) {
    userIsAuthorised = true;
  }
  next();
}

app.use(userName);
app.post("/register", (req, res) => {
  const username = req.body["USERNAME"];
  const password = req.body["password"];
  if (users[username]) {
    res.send("Username already exists");
  } else {
    users[username] = password;
    res.sendFile(join(__dirname, "index.html"));
  }
});
app.post("/login", passwordCheck, (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(join(__dirname, "index.html"));
  } else {
    res.send("Invalid username or password");
  }
});
*/
app.post("/register", (req, res) => {
  const { USERNAME, password } = req.body;
  if (users[USERNAME]) {
    res.status(400).send("Username already exists!!!");
  } else {
    users[USERNAME] = password;
    req.session.user = USERNAME;
    res.redirect("/");
  }
});
app.post("/login", (req, res) => {
  const { USERNAME, password } = req.body;
  if (users[USERNAME] && users[USERNAME] === password) {
    req.session.user = USERNAME;
    res.redirect("/");
  } else {
    res.status(401).send("Invalid username or password");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});







/*app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "log.html"));
});

//app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(join(__dirname, "index.html"));
  } else {
    res.sendFile(join(__dirname, "log.html"));
  }
//});*/
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
    }
    res.redirect("/");
  });
});


app.get("/user-data", (req, res) => {
  if (req.session.user) {
    res.json(users[req.session.user].data);
  } else {
    res.status(401).send("Not authenticated");
  }
});

// New route to update user-specific data
app.post("/user-data", (req, res) => {
  if (req.session.user) {
    users[req.session.user].data = req.body;
    res.json({ success: true });
  } else {
    res.status(401).send("Not authenticated");
  }
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
