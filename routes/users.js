const { sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdate } = require("../controllers/users");
const { findAllUsers, findUserById, createUser, deleteUser, updateUser } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("users/:id", findUserById, sendUserById);
usersRouter.post("/users", createUser, sendUserCreated);
usersRouter.delete("users/:id", deleteUser, sendUserDeleted);
usersRouter.put("users/:id", findUserById, updateUser, sendUserUpdate);

module.exports = usersRouter;
