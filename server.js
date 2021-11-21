const express = require('express');
//exphbs is like a build a bear templating engine
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
// sessions coming soon


const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

// app.get('/', (req, res) => {
//     res.render('layouts/main');
//   });
// force true every time server restarts it restarts the cookies
// turn it false when program is ready.
sequelize.sync({ force: false }).then(() =>{
    app.listen(PORT, () => {
      console.log(`Welcome to Tech Blog. Tuning in on ${PORT}!`);
    });
    });