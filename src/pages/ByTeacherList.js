import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import axios from 'axios';

import { ShadowContainer, Li} from '../styles/TeacherListStyle'

export default function ByTeacherList(){
    const [info, setInfo] = useState([]);
    const history = useHistory();

    function goBack(){
        history.push('/list-op');
    }

    useEffect(()=>{
        axios.get('https://repoprovasapi.herokuapp.com/api/get-teachers')
        .then(response=>{
            setInfo(response.data);
        })
        .catch(error=>{
            alert("Houve um erro inesperado, por favor recarregue a página");
        })
    }, []);

    function goToExamsList(teacherChosen){
        if(teacherChosen.qty_exams===null) return;
        history.push(`/exams-list/${teacherChosen.id}`);
    }

    return(
        <ShadowContainer>
            <div className="Topo">
               <h1>Listagem de professores cadastrados</h1>
                <RiArrowGoBackLine onClick={goBack}/> 
            </div>
            
            <ul className="Op">

                { info.length === 0 ? ""
                : info.map(l=>
                    <Li key={l.id} onClick={()=>goToExamsList(l)}>
                        <p>{l.name}</p>
                        {l.qty_exams === null ? <p>0</p> : <p>{l.qty_exams}</p>} 
                    </Li>
                )}
            </ul>
        </ShadowContainer>
    );
}

