import React from 'react';
import {
	FaCopyright,
	FaInstagram,
	FaLinkedin,
	FaPhone,
	FaTelegram,
} from 'react-icons/fa';

import styled from '@emotion/styled';

import Form from '../components/Form';

const Container = styled.div`
    width: 1300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const FooterStyled = styled.div`
    background-color: #b1e1ff;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SocialStyled = styled.div`
    margin-left: 20px;
    // position: relative;
    // top: 50px;
`;

const StyledTelegramIcon = styled(FaTelegram)`
    margin: 5px;

    :hover {
        color: #277bc0;
        cursor: pointer;
    }
`;

const StyledInstagramIcon = styled(FaInstagram)`
    margin: 5px;

    :hover {
        color: #b9005b;
        cursor: pointer;
    }
`;

const StyledPhoneIcon = styled(FaPhone)`
    margin: 5px;
    :hover {
        color: #7dce13;
        cursor: pointer;
    }
`;

const StyledLinkedInIcon = styled(FaLinkedin)`
    margin: 5px;

    :hover {
        color: #0096ff;
        cursor: pointer;
    }
`;
const Contact = styled.div`
    table {
        margin-left: 25px;
        // background-color: #fff;
    }
`;
const Footer = () => {
    return (
        <>
            <FooterStyled>
                <Container>
                    <h1>Contact:</h1>
                    <Form />
                    <div>
                        <Contact>
                            <SocialStyled>
                                <a
                                    href='https://www.instagram.com/nathankemal4/'
                                    target='_blank'
                                >
                                    <StyledInstagramIcon size={50} />
                                </a>
                                <a
                                    href=' https://t.me/nkemalyasin'
                                    target='_blank'
                                >
                                    <StyledTelegramIcon size={50} />
                                </a>
                                <StyledLinkedInIcon size={50} />
                                <a href='tel:0975642100' target='_blank'>
                                    <StyledPhoneIcon size={50} />
                                </a>
                            </SocialStyled>
                            <table className='table table-striped-columns'>
                                <tr>
                                    <td>Phone</td>
                                </tr>
                                <tr>
                                    <td>+251 0975642100</td>
                                </tr>
                                <tr>
                                    <td>Email:</td>
                                </tr>
                                <tr>
                                    <td>nathankemal4@gmail.com</td>
                                </tr>
                            </table>
                        </Contact>
                    </div>
                </Container>
            </FooterStyled>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '10px',
                    backgroundColor: '#5A8F7B',
                    color: '#fff',
                }}
            >
                <FaCopyright size={30} style={{marginRight: '5px'}} />
                <h6>2022</h6>
            </div>
        </>
    );
};

export default Footer;
