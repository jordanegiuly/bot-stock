import * as express from 'express'
import router from './router'

const app = express()
app.use(router);

export default <express.Application>app;
