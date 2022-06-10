// In controllers/user.js
// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');

const Users = require('../config/dbUsers.json');
const { hashPassword, checkPassword } = require('../utilities/passwordService');

// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

const signup = async (req, res) => {
  try {
    let newUser = {
      id: uuidv4(),
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

const getUsers = async (req, res) => {
    res.json(Users);
  };

  const login = async (req, res) => {
    try {
      let user = Users.find(user => user.username === req.body.username);
      let isMatch = await checkPassword(req.body.password, user.hashedPassword);
      if (user) {
        if (isMatch) {
          res.status(200).redirect('/users/authorized');
        } else {
          res.send('sorry password did not match');
        }
      } else {
        res.send('sorry username does not match');
      }
    } catch (err) {
      if (err) throw err;
    }
  };
  
  const logout = async (req, res) => {
    res.send('you hit the logout in route');
  };

  // const signup = async (req, res) => {
  //   res.send('you hit the signup in route');
  // };
  
  // const signup = async (req, res) => {
  //   try {
  //     let newUser = {
  //       id: uuidv4(),
  //       password: req.body.password,
  //       hashedPassword: await hashPassword(req.body.password),
  //       username: req.body.username

  //     };
  //     Users.push(newUser);
  //     res.status(200).redirect('/users/all');
  //   } catch (err) {
  //     if (err) throw err;
  //   }
  //   res.send('you hit the signup in route');
  // };
  

  
  const cookieCheck = async (req, res) => {
    res.send('you hit the authorized route, we will need to check your cookies');
  };
  module.exports = { login, signup, logout, cookieCheck, getUsers };