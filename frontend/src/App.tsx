import axios from 'axios';
import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
    const [count, setCount] = useState(0);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/home')
            .then((response) => response.json())
            .then((da) => {
                setMovies(da.results);
            });
    }, [count]);

    const Container = styled.div`
        margin: 10px auto 0 auto;
        display: flex;
        flex-wrap: wrap;
        width: 1300px;
        justify-content: center;
    `;

    return (
        <>
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
        </>
    );
}

export default App;
