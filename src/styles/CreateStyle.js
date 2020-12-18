import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #FFF;
    background: #00000080;
    .Topo{
        display: flex;
        font-size: 30px;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        border-bottom: 1px solid;
        background:#ff6e6ea8;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin-top: 40px;
    & > div{
        display: flex;
        input{
            height: 60px;
            width: 40%;
            margin: 0 auto;
        }
    }
    .Op{
        height: 300px;
        overflow-y: scroll;
        flex-direction: column;
        align-items: center;
        width: 90%;
        margin: 20px auto;
        border: 1px solid;
        box-shadow: 6px 7px 2px 1px #f4ff54ba;
        h1{
            font-size: 22px;
            padding: 10px;
            background: #0003;
            width: 100%;
            text-align: center;
            border-bottom: 1px solid;
        }
        ul{
            display: flex;
            flex-direction: column;
            flex-flow: wrap;
            li{
                margin: 10px;
                padding: 10px;
                border-radius: 10px;
                background: #df8472;
                &:hover {
                    background: #b45d4c;
                    cursor: pointer;
                }
            }
        }
        p{
            margin: 20px;
        }
    }
    input{
        width: 80%;
        margin: 10px auto;
        height: 50px;
        border: none;
    }
    button{
        width: 80%;
        margin: 20px auto;
        height: 70px;
        background: #4672ff;
        border: none;
        color: white;
        border-radius: 20px;
        font-size: 35px;
        &:hover{
            cursor: pointer;
        }
    }
`;