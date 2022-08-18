import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import Card from '../components/Card';
import Navbar from '../components/Navbar';

const Container = styled.div`
    margin: 10px auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    width: 1300px;
    justify-content: center;
`;

const SearchDetail = () => {
    const {id} = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        try {
            fetch(`http://localhost:5000/api/home/search/${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((da) => {
                    setMovies(da.results);
                    console.log(da.results);
                });
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <div>
            <h2>Search Result for: {id}</h2>
            <Container className=''>
                {movies.length > 0 ? (
                    movies.map((element) => {
                        const obj = {
                            title: element['title'],
                            id: element['id'],
                            overview: element['overview'],
                            img: element['poster_path'],
                            type: 'movie',
                        };
                        return <Card key={element['id']} {...obj} />;
                    })
                ) : (
                    <div style={{margin: 'auto auto'}}>Loading...</div>
                )}
            </Container>
        </div>
    );
};

export default SearchDetail;
