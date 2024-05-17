const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const gamesRouter = require("./routes/games");
//const categoriesRoutes = ("./routes/categories") 
const usersRouter = require("./routes/users");
const connectToDatabase = require("./database/connect");

const PORT = 3001;

const app = express();
connectToDatabase();

app.use(
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    usersRouter,
    gamesRouter,
);

app.listen(PORT, () => {
    console.log(`Server in running at PORT http://localhost:${PORT}`);
});
