// In controllers/user.js
const uuid = require('uuid/v4');
const Users = require('../config/dbUsers.json');
const { hashPassword } = require('../utilities/passwordService');

const getUsers = async (req, res) => {
    res.json(Users);
  };
  const login = async (req, res) => {
    res.send('you hit the login route');
  };
  const logout = async (req, res) => {
    res.send('you hit the logout in route');
  };
  
  const signup = async (req, res) => {
    try {
      let newUser = {
        id: uuid(),
        password: req.body.password,
        hashedPassword: await hashPassword(req.body.password),
        username: req.body.username
      };
      Users.push(newUser);
      res.status(200).redirect('/users/all');
    } catch (err) {
      if (err) throw err;
    }
  };
  

  
  const cookieCheck = async (req, res) => {
    res.send('you hit the authorized route, we will need to check your cookies');
  };
  module.exports = { login, signup, logout, cookieCheck, getUsers };