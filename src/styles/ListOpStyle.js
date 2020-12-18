import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background: #00000080;
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
        background:#ff6e6ea8;
        svg{
            font-size: 150px; 
        }
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
    height: 40px;
    margin-bottom:15px;
    border-radius: 30px;
    &:hover { 
        cursor: pointer;
        background: #f0e5e6eb;
    }
`;