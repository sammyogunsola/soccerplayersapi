import express from 'express';
import dotenv from 'dotenv';
import team from './teams.js';
import players from './players.js';

const app = express();

const PORT = process.env.PORT || 3030;

dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/players', (req, res) => {
    res.send(players);
});

app.get('/teams', (req, res) => {
    res.send(team);
});


app.listen(PORT, () =>{
    console.log(`Server is ready, PORT:${PORT} loading...` );
});