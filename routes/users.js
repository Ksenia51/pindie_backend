const { sendAllUsers, sendUserById, sendUserCreated, sendUserDeleted, sendUserUpdate } = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const { findAllUsers, findUserById, createUser, deleteUser, updateUser, hashPassword } = require("../middlewares/users");

const usersRouter = require("express").Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("users/:id", findUserById, sendUserById);
usersRouter.post("/users", hashPassword, createUser, sendUserCreated);
usersRouter.delete("users/:id", checkAuth, deleteUser, sendUserDeleted);
usersRouter.put("users/:id", checkAuth, findUserById, updateUser, sendUserUpdate);

module.exports = usersRouter;
