// In controllers/user.js
const Users = require('../config/dbUsers.json');

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
    res.send('you hit the signup in route');
  };
  const cookieCheck = async (req, res) => {
    res.send('you hit the authorized route, we will need to check your cookies');
  };
  module.exports = { login, signup, logout, cookieCheck, getUsers };