const express = require('express');
const mongoose = require('mongoose');
const bodyParser=require ('body-parser');
/**const SauceRoutes = require('/routes/sauce');*/
const userRoutes = require('./routes/user');




mongoose.connect('mongodb+srv://quentinde2s:ssbbike04@cluster0.yusculo.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


const app = express();
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json())

app.use('/api/auth', userRoutes);



/**app.use('/api/sauce', SauceRoutes);*/


/**app.post('/api/sauces', (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauce({
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});*/



/**app.get('/api/sauces', (req, res, next) => {
  Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
});*/

/**app.use('/api/sauces', (req, res, next) => {
  const sauceEx = [
    {
      id: 'id1',
      name: 'sauce1',
      manufacturer: 'sksk',
      description: 'sauce1kipik',
      mainPepper:'red',
      imageUrl:'imag1.pnj',
      heat:80,
      likes:100,
      dislikes:200,
      usersLiked:["yoyo","jojo"],
      usersDisliked:["gngn","grgr"]
    },
    {
        id: 'id2',
        name: 'sauce2',
        manufacturer: 'BlBl',
        description: 'sauce2kipik',
        mainPepper:'green',
        imageUrl:'imag2.pnj',
        heat:70,
        likes:120,
        dislikes:240,
        usersLiked:["azaz","qzqz","jhgj"],
        usersDisliked:["qzqd","azaz","hkjllkg"]
    },
  ];
  res.status(200).json(sauceEx);
})*/

/**app.get('/api/sauces/:id', (req, res, next) => {
  sauceEx.findOne({ _id: req.params.id })
    .then(sauceEx_id => res.status(200).json(sauceEx_id))
    .catch(error => res.status(404).json({ error }));
});*/
module.exports = app;