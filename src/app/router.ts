import * as express from 'express'
import models from '../models'
const router = express.Router();

router.get('/', (req, res) => {
    res.send('OK')
})

router.get('/companies', (req:express.Request, res:express.Response) => {
    models.Company.findAll()
    .then(companies => {
        const json = companies.map(company => {
            return company.toJSON();
        });
        res.json(json)
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/transaction_fees', (req:express.Request, res:express.Response) => {
    models.TransactionFee.findAll()
    .then(fees => {
        const json = fees.map(fee => {
            return fee.toJSON();
        });
        res.json(json)
    })
    .catch(err => {
        res.send(err)
    })
})


export default <express.Router>router;
