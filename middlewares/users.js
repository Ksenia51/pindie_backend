const users = require("../moduls/users");

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
};

const findUserById = async (req, res, next) => {
    console.log(`GET /users/${req.params.id}`);
    try {
        req.user = await users.findById(req.params.id);
        next();
    } catch (error) {
       res.status(404).send({ message: "User not found" }); 
    }
};

const createUser = async (req, res, next) => {
    console.log("POST /users");
    try {
        console.log(req.body);
        req.game = await users.create(req.body);
        next();
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: "Error while user creating not found" });
    }
};

const deleteUser = async (req, res, next) => {
    console.log(`DELETE /users/${req.params.id}`);
    try {
      req.user = await users.findByIdAndDelete(req.params.id);
      next();
    } catch (error) {
    console.log(error);
      res.status(400).send({ message: "Error while user deleting" });
    }
  };


  const updateUser = async (req, res, next) => {
    console.log(`PUT /users/${req.params.id}`);
    try {
        if (req.body.name || req.body.email || req.body.password) {
            req.user = await users.findByIdAndUpdate(req.params.id, req.body);
            next();
        } else {
            res.status(400).send({ message: "Error while user updating: body is empty" });
        }
    } catch (error) {
    console.log(error);
    }
  };

module.exports = { findAllUsers, findUserById, createUser, deleteUser, updateUser };