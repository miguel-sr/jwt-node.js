const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth')
const userController = require('../controllers/user.controllers');

// ==> Rota responsável por criar um novo 'User': (POST) localhost:8089/api/v1/register
router.post('/register', userController.registerNewUser); 

// ==> Rota responsável por realizar um novo login 'User': (POST) localhost:8089/api/v1/login
router.post('/login', userController.loginUser);

// ==> Rota responsável por retornar o perfil/profile 'User': (GET) localhost:8089/api/v1/userProfile
router.get('/userProfile', auth, userController.returnUserProfile);

module.exports = router;