import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const router = express.Router();

router.get('/', (req, res) => {
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
        responseType: 'json',
    }).then(function (data) {
        if (data.data !== null) {
            res.json(data.data);
            console.log(data.data);
        }
    });
});
router.get('/overview/:id', (req, res) => {
    if (req.params.id !== null) {
        try {
            axios({
                method: 'get',
                url: `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`,
                responseType: 'json',
            }).then(function (data) {
                if (data.data !== null) {
                    res.json(data.data);
                }
            });
        } catch (err) {
            res.json(err);
        }
    }
});

router.get('/cast/:id', (req, res) => {
    try {
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/movie/${req.params.id}/credits?api_key=${process.env.API_KEY}`,
            responseType: 'json',
        }).then(function (data) {
            if (data.data !== null) {
                res.json(data.data);
            }
        });
    } catch (err) {
        res.json(err);
    }
});

export default router;
