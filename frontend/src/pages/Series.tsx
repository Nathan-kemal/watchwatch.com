import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import Card from '../components/Card';

function Series() {
    const [count, setCount] = useState(0);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/home/series')
            .then((response) => response.json())
            .then((da) => {
                setSeries(da.results);
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
                {series.length > 0 ? (
                    series.map((element) => {
                     
                        const obj = {
                            title: element['title'],
                            id: element['id'],
                            overview: element['overview'],
                            img: element['poster_path'],
                            type: 'tv',
                        };
                        console.log(`nigger ${element}`);
                        return <Card key={element['id']} {...obj} />;
                    })
                ) : (
                    <div style={{margin: 'auto auto'}}>Loading...</div>
                )}
            </Container>
        </>
    );
}

export default Series;
