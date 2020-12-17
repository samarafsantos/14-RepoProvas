import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import styled from 'styled-components';
import axios from 'axios';

import { ShadowContainer, Li} from '../styles/TeacherListStyle'

export default function ByTeacherList(){
    const [info, setInfo] = useState([]);
    const history = useHistory();

    function goBack(){
        history.push('/exams');
    }

    // useEffect(()=>{
    //     const request = axios.get('http://localhost:3000/api/get-teachers')
    //     .then(response=>{
    //         console.log(response);
    //         setInfo(response.data);
    //     })
    //     .catch(error=>{
    //         console.log(error);
    //     })
    // }, []);


    return(
        <ShadowContainer>
            <div className="Topo">
               <h1>Listagem de professores cadastrados</h1>
                <RiArrowGoBackLine onClick={goBack}/> 
            </div>
            
            <ul className="Op">
                <Li>
                   <p>exemplo 1</p> 
                   <p>x provas</p>
                </Li>
                <Li>
                   <p>exemplo 1</p> 
                   <p>x provas</p>
                </Li>
            </ul>
        </ShadowContainer>
    );
}

