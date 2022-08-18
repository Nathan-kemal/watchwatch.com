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
            // console.log(data.data);
        }
    });
});
router.get('/overview/:type/:id', (req, res) => {
    if (req.params.id !== null) {
        if (req.params.type === 'trending') {
            try {
                axios({
                    method: 'get',
                    url: `https://api.themoviedb.org/3/${req.params.type}/all/${req.params.id}?api_key=${process.env.API_KEY}`,
                    responseType: 'json',
                }).then(function (data) {
                    if (data.data !== null) {
                        res.json(data.data);
                        // console.log(req.params);
                    }
                });
            } catch (err) {
                res.json(err);
            }
        } else {
            try {
                axios({
                    method: 'get',
                    url: `https://api.themoviedb.org/3/${req.params.type}/${req.params.id}?api_key=${process.env.API_KEY}`,
                    responseType: 'json',
                }).then(function (data) {
                    if (data.data !== null) {
                        res.json(data.data);
                        // console.log(req.params);
                    }
                });
            } catch (err) {
                res.json(err);
            }
        }
    }
});

router.get('/cast/:type/:id', (req, res) => {
    if (req.params.type === 'trending') {
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
    } else {
        try {
            axios({
                method: 'get',
                url: `https://api.themoviedb.org/3/${req.params.type}/${req.params.id}/credits?api_key=${process.env.API_KEY}`,
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

router.get('/search/:id', (req, res) => {
    try {
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false&query=${req.params.id}`,
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

router.get('/trending/:id', (req, res) => {
    try {
        axios({
            method: 'get',
            url: `https://api.themoviedb.org/3/trending/${req.params.id}/week?api_key=${process.env.API_KEY}`,
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

router.get('/series', (req, res) => {
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`,
        responseType: 'json',
    }).then(function (data) {
        if (data.data !== null) {
            res.json(data.data);
            console.log(data.data);
        }
    });
});
export default router;
