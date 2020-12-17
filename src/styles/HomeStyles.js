import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    .Title {
        height: 100px;
        margin-top: 100px;
        padding: 10px;
        box-shadow: 10px 14px 0px 4px #ffffff;
        border: 1px solid;
        background: #95b4cecc;
        width:90%;
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
    svg{
        &:hover{
            cursor: pointer;
        }
    }
`;

export const Button = styled.button`
    background: rgba(255,255,255,0.9);
    font-size: 30px;    
    color: #b685b6;
    border: none;
    width: 70%;
    height: 90px;
    margin-bottom:15px;
    border-radius: 30px;
    &:hover { 
        cursor: pointer;
        background: #f0e5e6eb;
    }
`;