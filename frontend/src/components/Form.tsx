import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div`
    margin: 10px 0 0 0;
    width: 300px;

    position: relative;
    left: 50px;
`;

const Background = styled.div`
    background-color: #293462;
    width: 400px;
    height: 500px;
    color: #fff;
    display: flex;
    align-items: center;
    border-radius: 10px;
`;

const Form = () => {
    return (
        <Background>
            <Container>
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>Name*</label>
                        <input
                            required
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='name'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Email address*</label>
                        <input
                            required
                            type='email'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='name@example.com'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Subject*</label>
                        <input
                            required
                            type='text'
                            className='form-control'
                            id='exampleFormControlInput1'
                            placeholder='subject'
                        />
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Message</label>
                        <textarea
                            className='form-control'
                            id='exampleFormControlTextarea1'
                            rows={4}
                        ></textarea>
                    </div>
                    <div className='mb-3'>
                        <button className='btn btn-primary btn-lg'>Send</button>
                    </div>
                </form>
            </Container>
        </Background>
    );
};

export default Form;
