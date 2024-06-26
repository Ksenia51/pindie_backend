const { sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdate } = require("../controllers/games");
const { checkAuth } = require("../middlewares/auth");
const { findAllGames, findGameById, createGame, deleteGame, updateGame } = require("../middlewares/games");

const gamesRouter = require("express").Router();

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post("/games", checkAuth, createGame, sendGameCreated);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);
gamesRouter.put("/games/:id", checkAuth, findGameById, updateGame, sendGameUpdate);

module.exports = gamesRouter;
