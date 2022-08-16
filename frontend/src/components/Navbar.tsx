import React from 'react';

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
const NavLi = styled.li`
    background-color: white;
    list-style: none;
    margin-right: 15px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid;
    border-radius: 5px;
`;

const Navbar = () => {
    return (
        <>
            <NavStyled className='bg-light'>
                <NavUl>
                    <h2>watchwatch</h2>
                    <Container>
                        <NavLi>Home</NavLi>
                        <NavLi>Movie</NavLi>
                        <NavLi>Series</NavLi>

                        <input className='form-control' type='text' />
                        <button className='btn btn-primary'>Search</button>
                    </Container>
                </NavUl>
            </NavStyled>
        </>
    );
};

export default Navbar;
