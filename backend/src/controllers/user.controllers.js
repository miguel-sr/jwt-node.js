const User = require('../models/user.model');

// ==> Método responsável por Criar um novo 'User':
exports.registerNewUser = async (req, res) => {
  try {
    // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado
    const isUser = await User.find({email: req.body.email}).lean();
    console.log(isUser);

    if (isUser.length >=  1) {
      return res.status(409).json({message: 'Sorry! This email is already registered!'});
    }

    const newUser = new User(req.body);
    const user = await newUser.save();
    const token = await newUser.generateAuthToken(); // ==> Aqui chamaremos o método que criamos no model
    return res.status(201).json({message: 'User created successfully', user, token})
  } catch (err) {
    return res.status(400).json({err: err})
  }
};

// ==> Método responsável por realizar um novo login 'User'
exports.loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await User.findByCredentials(email, password);

    if(!user) {
      return res.status(401).json({message: 'Error when logging in, check your credentials'});
    }

    const token = await user.generateAuthToken();
    
    return res.status(201).json({message: 'User successfully logged in!', user, token});

  } catch (err) {
    return res.status(400).json({err})
  }
};

// ==> Método responsável por retornar um determinado 'User'
exports.returnUserProfile = async (req, res) => {
  await res.json(req.userData)
};