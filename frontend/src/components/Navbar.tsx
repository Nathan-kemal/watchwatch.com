import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

const NavStyled = styled.nav`
    height: 60px;
    width: 100%;
    background-color: grey;
    // position: fixed;
    // z-index: 1;
`;
const NavUl = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;

    li:hover {
        background-color: orange;
    }
`;
const Container = styled.div`
    display: flex;
    align-items: center;

    input {
        margin-right: 10px;
    }
    button {
        padding: 5px 15px;
        margin-right: 10px;
        border-radius: 10px;
    }
`;
const NavLi = styled(Link)`
    background-color: white;
    list-style: none;
    margin-right: 15px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid;
    border-radius: 5px;
    text-decoration: none;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: bold;
`;
const Navbar = () => {
    const ref = useRef<HTMLInputElement>(null);
    const [search, setSearch] = useState('');

    const searchMovies = (): string => {
        if (ref.current?.value !== '') return String(ref.current?.value);
        else return '';
    };

    function searchKey(event: React.ChangeEvent<HTMLInputElement>) {
        setSearch(event.target.value);
    }

    return (
        <>
            <NavStyled className='bg-light'>
                <NavUl>
                    <StyledLink to={{pathname: `/`}}>
                        <h2>watchwatch</h2>
                    </StyledLink>
                    <Container>
                        <NavLi to='/'>Home</NavLi>
                        <NavLi to='/movies'>Movie</NavLi>
                        <NavLi to='/series'>Series</NavLi>

                        <input
                            onChange={searchKey}
                            className='form-control'
                            type='text'
                        />
                        <Link to={{pathname: `/search/${search}`}}>
                            <button className='btn btn-primary'>Search</button>
                        </Link>
                    </Container>
                </NavUl>
            </NavStyled>
        </>
    );
};

export default Navbar;
