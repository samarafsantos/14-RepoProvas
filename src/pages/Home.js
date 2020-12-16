import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { GiChecklist } from 'react-icons/gi';

export default function Home(){
    const history = useHistory();
    
    function sendToVisualize(){
        console.log("chegou aqui");
        history.push('/exams');
    }
    
    function sendToCreate(){
        history.push('/create');
    }

    return(
        <Container>
            <div className="Title">
               <GiChecklist /> 
               <h1>RepoProvas</h1>
            </div>
            <div className="Op">
                <Button onClick={sendToVisualize}>
                    <h1>Visualizar provas</h1>
                </Button>
                <Button onClick={sendToCreate}>
                    <h1>Enviar provas</h1>
                </Button>
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
    .Title {
        border-bottom: 1px solid;
        background: #2c0d0d;
        width:100%;
        display: flex;
        align-items: center;
        color: white;
        svg{
            font-size: 150px; 
        }
        h1{
            font-size: 40px;
        }
        
    }
    .Op{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 100px auto;
    }
`;

const Button = styled.button`
    background: rgba(255,255,255,0.9);
    font-size: 30px;    
    color: #8D3535;
    border: none;
    width: 70%;
    height: 90px;
    margin-bottom:15px;
    border-radius: 30px;
    &:hover { 
        cursor: pointer;
        background: rgba(188,188,188,0.9);
    }
`;