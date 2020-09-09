const { Router } = require('express');
const router = Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Pro = require('../../models/auth/Pro.model');
const User = require('../../models/auth/User.model');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {

    User.find((err, docs) => {
        if(err) return res.status(400).send(err);

        res.send(docs);
    })
});

router.get('/pro/:trade', (req, res) => {

    let query = User.find({ role: 'ROLE_PRO', metier: req.params.trade }).select('metier');
    
    query.exec((err, doc) => {
        if(err) return res.status(400).send(err);

        res.send(doc);
    });
});

router.get('/pro', (req, res) => {

    User.find({ role: 'ROLE_PRO' }, (err, docs) => {
        if(err) return res.status(400).send(err);

        res.send(docs);
    })
});

router.get('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(400).send(`No recored with given id : ${req.params.id}`)
    }

    User.findById(req.params.id ,(err, doc) => {
        if(err) return res.status(400).send(err);

        res.send(doc);
    })
});

router.post('/signup', async (req, res) => {

    const emailExist = await User.findOne({ email: req.body.email });
    if(emailExist) return res.status(400).send("Email deja existe");

    const body = req.body;

    const newUser = new User(body);
    await newUser.save((err) => {
        if(err) return res.status(400).send(err);

        const token = jwt.sign({_id: newUser._id}, 'secretkey');
        res.status(200).json({token});
    });
    
});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email});
    if (!user) return res.status(401).send('The email doen\' exists');
    if (user.password !== password) return res.status(401).send('Wrong Password');

    const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});

router.get('profile', verifyToken, (req, res) => {
    res.send(req.userId)
});

router.delete('/:id', (req, res) => {

    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No recored with given id : ${req.params.id}`);

    User.findByIdAndDelete(req.params.id, (err, doc) => {
        if(err) return handleError(err);
        
        Pro.remove({user: req.params.id}, (err) => {
            if(err) return handleError(err);

            res.send('Pro deleted');  
        });
    });
});

async function verifyToken(req, res, next) {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized Request');
        }
        let token = req.headers.authorization.split(' ')[1];

        if (token === 'null') {
            return res.status(401).send('Unauthorized Request');
        }

        const payload = await jwt.verify(token, 'secretkey');
        
        if (!payload) {
            return res.status(401).send('Unauhtorized Request');
        }
        req.userId = payload._id;
        next();
    } catch(e) {
        //console.log(e)
        return res.status(401).send('Unauhtorized Request');
    }
}

module.exports = router;