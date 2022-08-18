import './index.css';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.div`
    margin: 0 auto 0 auto;
    width: 1300px;
`;
const StyledInput = styled.input`
    width: 90%;
    margin-right: 10px;
    margin-top: 30px;
`;
type ImagePath = {
    url: string;
};
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    background-size: cover;
    background-image: url(${(props: ImagePath) => props.url});
    background-color: #cccccc;
`;

const Card = styled.div`
    width: 8rem;
    margin: 4px;
    display: inline-block;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;
const CardImage = styled.img`
    width: 100%;
`;
const Cardbody = styled.div``;
const CardTitle = styled.h5`
    overflow: hidden;
    margin-top: 20px;
`;
const CardText = styled.p`
    overflow: hidden;
`;

const Trending = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;

    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-track {
        background-color: #f1efdc;
        border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
`;
const Styledbutton = styled.button``;
const Home = () => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [trending, setTrending] = useState([]);

    const [search, setSearch] = useState('');

    function searchKey(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }
    useEffect(() => {
        try {
            fetch(`http://localhost:5000/api/home/trending/all`)
                .then((response) => {
                    return response.json();
                })
                .then((da) => {
                    setMovies(da.results);
                });

            fetch(`http://localhost:5000/api/home/trending/tv`)
                .then((response) => {
                    return response.json();
                })
                .then((da) => {
                    setSeries(da.results);
                });

            fetch(`http://localhost:5000/api/home/trending/all`)
                .then((response) => {
                    return response.json();
                })
                .then((da) => {
                    setTrending(da.results);
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    // console.log(images);
    return (
        <div>
            <Header url={`https://source.unsplash.com/random/1366×720/?movies`}>
                <Container>
                    <h2
                        style={{
                            color: '#1C3879',
                        }}
                    >
                        Welcome to WatchWatch
                    </h2>
                    <StyledInput
                        onChange={searchKey}
                        className='form-control d-inline-block'
                    />

                    <Link to={{pathname: `/search/${search}`}}>
                        <Styledbutton className='btn btn-primary'>
                            Search
                        </Styledbutton>
                    </Link>
                </Container>
            </Header>
            <Container>
                <CardTitle>Trending</CardTitle>
                <Trending>
                    {trending.length > 0 ? (
                        trending.map((trandi) => (
                            <Card key={trandi?.['id']} className='card'>
                                <StyledLink
                                    to={{
                                        pathname: `/overview/${trandi?.['media_type']}/${trandi?.['id']}`,
                                    }}
                                >
                                    <CardImage
                                        src={`http://image.tmdb.org/t/p/w500${trandi?.['poster_path']}`}
                                    />
                                    {/* <Cardbody className='card-body'>
                                     <CardTitle className='card-title'>
                                        {movie?.['title'] || movie?.['name']}
                                    </CardTitle> 
                                    <CardText className='card-text'></CardText>
                                </Cardbody> */}
                                </StyledLink>
                            </Card>
                        ))
                    ) : (
                        <div></div>
                    )}
                </Trending>

                <CardTitle>Series</CardTitle>
                <Trending>
                    {series.length > 0 ? (
                        series.map((seri) => (
                            <Card key={seri?.['id']} className='card'>
                                <StyledLink
                                    to={{
                                        pathname: `/overview/tv/${seri?.['id']}`,
                                    }}
                                >
                                    <CardImage
                                        src={`http://image.tmdb.org/t/p/w500${seri?.['poster_path']}`}
                                    />
                                    {/* <Cardbody className='card-body'>
                                     <CardTitle className='card-title'>
                                        {movie?.['title'] || movie?.['name']}
                                    </CardTitle> 
                                    <CardText className='card-text'></CardText>
                                </Cardbody> */}
                                </StyledLink>
                            </Card>
                        ))
                    ) : (
                        <div></div>
                    )}
                </Trending>

                <CardTitle>Movies</CardTitle>
                <Trending>
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <Card key={movie?.['id']} className='card'>
                                <StyledLink
                                    to={{
                                        pathname: `/overview/movie/${movie?.['id']}`,
                                    }}
                                >
                                    <CardImage
                                        src={`http://image.tmdb.org/t/p/w500${movie?.['poster_path']}`}
                                    />
                                    {/* <Cardbody className='card-body'>
                                     <CardTitle className='card-title'>
                                        {movie?.['title'] || movie?.['name']}
                                    </CardTitle> 
                                    <CardText className='card-text'></CardText>
                                </Cardbody> */}
                                </StyledLink>
                            </Card>
                        ))
                    ) : (
                        <div></div>
                    )}
                </Trending>
            </Container>
        </div>
    );
};

export default Home;
