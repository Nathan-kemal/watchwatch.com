import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from '@emotion/styled';

import Navbar from '../components/Navbar';

type ImagePath = {
    url: string;
};
const Container = styled.div`
    width: 94%;

    margin: 0 auto;
`;
const SectionContainer = styled.div`
    width: 94%;
    height: 80vh;

    display: flex;
    background-image: url(${(props: ImagePath) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
`;
const Content = styled.div`
    margin-top: 50px;
    margin-left: 50px;
    width: 60%;
    height: 80%;
    color: #fff;
`;
const Poster = styled.img`
    width: 400px;
    height: 500px;
    object-fit: cover;
    margin: 15px;
    border-radius: 10px;
`;
const BackgroundPoster = styled.img`
    width: 94%;
    height: 80vh;
    margin: 0 auto;
    position: absolute;

    background-repeat: no-repeat;

    background-size: cover;
    z-index: -2;
    filter: blur(6px);
    border-radius: 10px;
`;
const Cast = styled.div`
    // display: grid;/

    // grid-template-columns: repeat(auto-fit)

    background-color: #deb6ab;
    height: 300px;
    width: 100%;
    border-radius: 10px;
    overflow: auto;
    white-space: nowrap;

    h1 {
        display: inline-block;
    }
`;

const CardStyled = styled.div`
    width: 8rem;

    display: inline-block;
    margin: 4px;
    :hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;
const CardImage = styled.img``;
const StyledParagraph = styled.p``;
const OverView = () => {
    const {type, id} = useParams();
    const [movie, setMovies] = useState();
    const [casts, setCast] = useState([]);

    useEffect(() => {
        try {
            fetch(`http://localhost:5000/api/home/overview/${type}/${id}`)
                .then((response) => {
                    return response.json();
                })
                .then((da) => {
                    setMovies(da);
                })
                .then(() => {
                    fetch(`http://localhost:5000/api/home/cast/${type}/${id}`)
                        .then((response) => {
                            return response.json();
                        })
                        .then((da) => {
                            setCast(da.cast);
                            // console.log(casts);
                        });
                });
        } catch (error) {
            console.log(error);
        }
    }, []);

    // console.log(casts);
    return (
        <div>
            <Container>
                <SectionContainer url={``}>
                    <BackgroundPoster
                        src={`http://image.tmdb.org/t/p/w500/${movie?.['backdrop_path']}`}
                    ></BackgroundPoster>
                    {movie !== null ? (
                        <>
                            <Poster
                                src={`http://image.tmdb.org/t/p/w500/${movie?.['poster_path']}`}
                            />
                            <Content>
                                <h1>
                                    {`${movie?.['title']}(${movie?.['release_date']})`}{' '}
                                </h1>
                                <h4>{movie?.['genres'][0]['name']}</h4>
                                <h4>{movie?.['tagline']}</h4>

                                <h5>Overview</h5>
                                <StyledParagraph>
                                    {movie?.['overview']}
                                </StyledParagraph>
                            </Content>
                        </>
                    ) : (
                        <h1>Loading ...</h1>
                    )}
                </SectionContainer>
                <h1>Casts</h1>
                <Cast>
                    {casts.length > 0 ? (
                        casts.map((cast) => (
                            <CardStyled key={cast?.['id']} className='card'>
                                <CardImage
                                    src={`http://image.tmdb.org/t/p/w500${cast?.['profile_path']}`}
                                    className='card-img-top'
                                />
                                <div className='card-body'>
                                    <p>{cast?.['name']}</p>
                                    {/* <p className='card-text'>{truncate(overview, 100)}</p> */}
                                </div>
                            </CardStyled>
                        ))
                    ) : (
                        <div></div>
                    )}
                </Cast>
            </Container>

            <Container></Container>
        </div>
    );
};

export default OverView;
