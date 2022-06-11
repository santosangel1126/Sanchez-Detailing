// In controllers/user.js
// const uuid = require('uuid');
const { v4: uuidv4 } = require('uuid');
const Users = require('../config/dbUsers.json');
const { hashPassword, checkPassword } = require('../utilities/passwordService');
const { createToken, isValidToken } = require('../utilities/tokenService');

const cookieOptions = {
  expires: new Date(Date.now() + 900000),
  httpOnly: true,
  // secure: true, on deployment for https
  signed: true
};


const signup = async (req, res) => {
  try {
    let newUser = {
      id: uuidv4(),
      password: req.body.password,
      hashedPassword: await hashPassword(req.body.password),
      username: req.body.username
    };
    Users.push(newUser);
    let token = await createToken(newUser);
    console.log(token);
    res
      .cookie('token', token, cookieOptions)
      .status(200)
      .redirect('/users/authorized');
    // res.status(200).redirect('/users/all');
  } catch (err) {
    if (err) throw err;
  }
};

const getUsers = async (req, res) => {
  try {
    res.json(Users);
  } catch (err) {
    if (err) throw err;
  }
  };

  const login = async (req, res) => {
    try {
      let user = Users.find(user => user.username === req.body.username);
      let isMatch = await checkPassword(req.body.password, user.hashedPassword);
      if (user) {
        if (isMatch) {
          let token = await createToken(user);
        console.log('token', token);
        res.cookie('token', token, cookieOptions).redirect('/users/authorized');
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
    try {
      res.clearCookie('token').redirect('/users/all');
    } catch (err) {
      if (err) throw err;
    }
    res.send('you hit the logout in route');
  };

  
  const cookieCheck = async (req, res) => {
    const { token } = req.signedCookies;
    if (token) {
      try {
        let {
          user: { username, hashedPassword }
        } = await isValidToken(token);
        let user = Users.find(user => user.username === username);
        res.send({ username: user.username, password: hashedPassword });
      } catch (err) {
        if (err) throw err;
      }
    } else {
      res.send({ message: 'Sorry your token has expired.' });
    }
  };
    // res.send('you hit the authorized route, we will need to check your cookies');

  module.exports = { login, signup, logout, cookieCheck, getUsers };