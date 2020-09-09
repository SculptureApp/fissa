const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

require('./db');

app.use(bodyParser.json());
app.use(cors());

const userRoute = require('./routes/auth/user');

app.use('/users', userRoute);
 
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => console.log(`Serveur démarrer sur port ${app.get('port')}...`) );