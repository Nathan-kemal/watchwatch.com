import React from 'react';
import { Link, useParams } from 'react-router-dom';

import styled from '@emotion/styled';

const CardStyled = styled.div`
    width: 18rem;
    display: flex;
    margin: 10px;
    :hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
`;
interface MovieDetail {
    title: string;
    id: number;
    type: string;
    overview: string;
    img: string;
}
const CardImage = styled.img``;

const truncate = (str: string, length: number) => {
    if (str.length > length) {
        if (length <= 3) {
            return str.slice(0, length - 3) + '...';
        } else {
            return str.slice(0, length) + '...';
        }
    } else {
        return str;
    }
};

const Card = ({title, type, id, overview, img}: MovieDetail) => {
    return (
        <>
            <CardStyled className='card'>
                <StyledLink
                    to={{
                        pathname: `/overview/${type}/${id}`,
                    }}
                >
                    <CardImage
                        src={`http://image.tmdb.org/t/p/w500/${img}`}
                        className='card-img-top'
                    />
                    <div className='card-body'>
                        <h3>{title}</h3>
                        {/* <p className='card-text'>{truncate(overview, 100)}</p> */}
                    </div>
                </StyledLink>
            </CardStyled>
        </>
    );
};

export default Card;
