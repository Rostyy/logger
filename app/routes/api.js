const {calculateSum} = require('../services/calc-sum');

module.exports = (express) => {

    let api = express.Router();

    api.get('/*/sum', (req, res) => {
        const url = req.url;
        const key = url.split('/')[1];
        console.log('key ->', key);
        calculateSum(key);
        res.send(`key ${key}`);
    });

    api.get('/*', (req, res) => {
        const url = req.url;
        res.send(`get from random ${url}`);
    });

    api.post('/*', (req, res) => {
        const {value} = req.body;
        res.send({value});
    })

    return api;
};
