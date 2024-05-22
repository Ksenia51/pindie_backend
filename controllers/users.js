const sendAllUsers = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.usersArray));
};

const sendUserById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

const sendUserCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.user));
};

const sendUserDeleted = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.user);
    res.end(JSON.stringify(req.user)); 
};

const sendUserUpdate = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.user);
    res.end(JSON.stringify(req.user)); 
};

module.exports = { sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdate };