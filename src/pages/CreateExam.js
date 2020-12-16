import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import styled from 'styled-components';

export default function Home(){
    const history = useHistory();

    function goBack(){
        history.push('/')
    }

    return(
        <Container>
            <h1>Cadastro de provas</h1>
            <RiArrowGoBackLine onClick={goBack}/>

        </Container>
    );
}

const Container = styled.div`
    background: #561717;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
`;