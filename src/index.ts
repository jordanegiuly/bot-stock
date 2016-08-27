import * as express from 'express';
const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
});
