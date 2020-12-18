import styled from 'styled-components';

export const ShadowContainer = styled.div`
    background: #00000080;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    .Topo{
        display: flex;
        font-size: 22px;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid;
        background:#ff6e6ea8;
        svg{
            font-size: 30px;
        }
        h1{
            text-align: center;
        }
    }
    .Op{
        margin-top: 50px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;  
        h1{
            font-size: 30px;
            margin-bottom: 10px;
        }
        a{
            width:100%;
            display: flex;
            justify-content: space-around;
        }
    }
    svg{
        &:hover{
            cursor: pointer;
        }
    }
`;

export const Li = styled.li`
        display: flex;
        width: 90%;
        justify-content: space-around;
        background: #dcd5ff;
        border-radius: 10px;
        color: #c63939;
        padding: 10px;
        margin-bottom: 15px;
    p{
        font-size:23px;
    }
    &:hover{
        cursor: pointer;
        background: #f0e5e6eb;
    }
`;
