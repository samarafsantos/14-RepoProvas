import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import styled from 'styled-components';

export default function BySubjectList(){
    const history = useHistory();

    function goBack(){
        history.push('/exams');
    }

    return(
        <Container>
            <div className="Topo">
               <h1>Listagem de disciplinas cadastrados</h1>
                <RiArrowGoBackLine onClick={goBack}/> 
            </div>
            
            <div className="Op">
                <p>exemplo 1</p>
            </div>
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
    .Topo{
        display: flex;
        font-size: 30px;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid;
    }
    .Op{
        margin-top: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            font-size: 30px;
            margin-bottom: 20px;
        }
    }
`;

const Button = styled.button`
    background: rgba(255,255,255,0.9);
    font-size: 30px;    
    color: #8D3535;
    border: none;
    width: 70%;
    height: 40px;
    margin-bottom:15px;
    border-radius: 30px;
    &:hover { 
        cursor: pointer;
        background: rgba(188,188,188,0.9);
    }
`;