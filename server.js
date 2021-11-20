const express = require('express');
//exphbs is like a build a bear templating engine
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());

app.get('/', (req, res) => {
    res.render('layouts/main');
  });

sequelize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => {
      console.log(`Welcome to Tech Blog. Tuning in on ${PORT}!`);
    });
    });