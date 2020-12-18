import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import axios from 'axios';

import { ShadowContainer, Li} from '../styles/TeacherListStyle'

export default function BySubjectList(){
    const [info, setInfo] = useState([]);
    const [semester, setSemester] = useState([]);
    const history = useHistory();

    function goBack(){
        history.push('/list-op');
    }

    useEffect(()=>{
        axios.get('http://localhost:3000/api/get-subjects')
        .then(response=>{
            setInfo(response.data);
            let semesters = response.data.map(r => r.semester);
            let filteredSemester = semesters.filter((v,i)=>semesters.indexOf(v) === i);
            setSemester(filteredSemester);
        })
        .catch(error=>{
            alert("Houve um erro inesperado, por favor recarregue a página");
        })
    }, []);

    function goToExamsList(subjectChosen){
        if(subjectChosen.qty_exams===null) return;
        history.push(`/exams-list-s/${subjectChosen.id}`);
    }

    return(
        <ShadowContainer>
            <div className="Topo">
               <h1>Listagem de disciplinas cadastradas</h1>
                <RiArrowGoBackLine onClick={goBack}/> 
            </div>
            <ul className="Op">
                { semester.map(s=>
                    <ul className="Op" key={s.id}>
                      <h1>{s}</h1>  
                      {info.length === 0 ? ""
                        : info.map(l=>
                        l.semester === s ? 
                        <Li key={l.id} onClick={()=>goToExamsList(l)}>
                            <p>{l.name}</p>
                            {l.qty_exams === null ? <p>0</p> : <p>{l.qty_exams}</p>}
                        </Li> : ""
                        )}
                    </ul>
                    
                )}
            </ul>
        </ShadowContainer>
    );
}
