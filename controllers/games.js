const sendAllGames = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.gamesArray));
};

const sendGameById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game));
};

const sendGameCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.game)); 
};

const sendGameDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.game);
    res.end(JSON.stringify(req.game)); 
};

const sendGameUpdate = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.game);
    res.end(JSON.stringify(req.game)); 
};

module.exports = { sendAllGames, sendGameById, sendGameCreated, sendGameDeleted, sendGameUpdate };