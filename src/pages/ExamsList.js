import React from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';

import { Container, Button} from '../styles/ExamsListStyle'

export default function ExamsList(){
    const history = useHistory();

    function goBack(){
        history.push('/');
    }

    function selectedTeacher(){
        history.push('/list-by-teacher');
    }

    function selectedSubject(){
        history.push('/list-by-subject');
    }

    return(
        <Container>
            <div className="Topo">
               <h1>Listagem de provas</h1>
                <RiArrowGoBackLine onClick={goBack}/> 
            </div>
            
            <div className="Op">
                <p>Listar provas por:</p>
                <Button onClick={selectedTeacher}>
                    <h1>Professor</h1>
                </Button>
                <Button onClick={selectedSubject}>
                    <h1>Disciplinas</h1>
                </Button>
            </div>
        </Container>
    );
}
