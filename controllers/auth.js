const users = require("../moduls/users");
const bcrypt = require("bcryptjs");

const login = (res, req) => {
    const {email, password} = req.body;
    users.findOne({ email }).then((user) => {
        if (!user) {
            return Promise.reject(new Error("Неправильная почта или пароль"));
        }
        return bcrypt.compare(password, user.password).then ((matched) => {
            if (!matched) {
                return Promise.reject(new Error("Неправильная почта или пароль"));
            }
            return user;
        });
    })
    .then((user) => {
        res
        .status(200)
        .send({ _id: user._id, username: user.username, email: user.email });
    })
    .catch((error) => {
        re.status(401).send({ message: error.massege });
    });
};

    module.exports = { login };