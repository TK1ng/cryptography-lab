const bcrypt = require('bcryptjs');

const users = []

module.exports = {
  login: (req, res) => {
    console.log('Logging In User')
    const { username, password } = req.body;

    for (let i = 0; i < users.length; i++) {
      passwordMatch = bcrypt.compare(password, users[i].passwordHash)
      if (users[i].username === username && passwordMatch) {
        res.status(200).send(users[i]);
        return;
      }
    }
    res.status(400).send("User not found.")
  },
  register: (req, res) => {
    console.log('Registering User')

    const { username, email, firstName, lastName, password } = req.body;

    const salt = bcrypt.genSaltSync(5);
    let passwordHash = bcrypt.hashSync(password, salt);

    let user = {
      username,
      passwordHash,
      email,
      firstName,
      lastName
    }

    console.log(user);
    users.push(user);

    let tempUser = { ...user };
    delete tempUser.passwordHash;

    res.status(200).send(tempUser)
  }
}