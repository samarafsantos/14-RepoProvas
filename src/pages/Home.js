import React from 'react';
import { useHistory } from 'react-router-dom';
import { GiChecklist } from 'react-icons/gi';

import { Container, Button} from '../styles/HomeStyles'

export default function Home(){
    const history = useHistory();
    
    function sendToVisualize(){
        history.push('/list-op');
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