const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost:27017/fissa', 
        { useNewUrlParser: true, useUnifiedTopology: true }, 
        (err) => {
            if(!err) console.log('Mongodb connecter avec succées...');
            else console.log('Probleme de connexion'+ JSON.stringify(err, undefined, 2));
});

module.export = mongoose;