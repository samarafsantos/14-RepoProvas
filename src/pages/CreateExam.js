import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import axios from 'axios';

import { Container, Form } from '../styles/CreateStyle';

export default function Home(){
    const [examName, setExamName] = useState("");
    const [category, setCategory] = useState("");
    const [subject, setSubject] = useState([]);
    const [chosenSubject, setChosenSubject] = useState([]);
    const [teacher, setTeacher] = useState([]);
    const [chosenTeacher, setChosenTeacher] = useState([]);
    const [availableTeacher, setAvailableTeacher] = useState([]);
    const [link, setLink] = useState("");

    const history = useHistory();

    function goBack(){
        history.push('/')
    }

    useEffect(()=>{
        axios.get("https://repoprovasapi.herokuapp.com/api/get-subjects")
        .then((response)=>{
            setSubject(response.data);
        })
        .catch((error)=>{
            alert("Houve um erro inesperado, por favor recarregue a página");
        })

        axios.get("https://repoprovasapi.herokuapp.com/api/get-teacher-subjects")
        .then(response=>{
            setTeacher(response.data);
        })
        .catch(error=>{
            alert("Houve um erro inesperado, por favor recarregue a página");
        })

    },[])

    function clickedSubject(s){
        setChosenSubject(s);
        let filteredTeacher = teacher.filter(t=>t.subject===s.name);
        setAvailableTeacher(filteredTeacher);
    }

    function sendData(e){
        e.preventDefault();
        const data = {examName, category, chosenSubject, chosenTeacher, link}
        axios.post('https://repoprovasapi.herokuapp.com/api/register-exam', {data})
        .then(response=>{
            alert("Prova cadastrada com sucesso!");
            history.push("/");
        })
        .catch(error=>{
            alert("Houve um erro inesperado ao tentar cadastrar os dados, por favor, verifique suas respostas e tente novamente.");
        })
    }

    return(
        <Container>
            <div className="Topo">
              <h1>Cadastro de provas</h1>
                <RiArrowGoBackLine onClick={goBack}/>  
            </div>
            
            <Form onSubmit={sendData}>
                <div className="ExamInfo">
                    <input
                    type="text"
                    value={examName}
                    onChange={(e)=> setExamName(e.target.value)}
                    placeholder="Nome da prova (ex.: 2020.1, 2019.2, 2019.1)"
                    required
                    />
                    <input
                        type="text"
                        value={category}
                        onChange={(e)=> setCategory(e.target.value)}
                        placeholder="Categoria (ex.: P1/P2/P3/PF/2ch/Outras)"
                        required
                    />
                </div>
                <div className="Op">
                    <h1>Lista de disciplinas</h1>
                    <ul>
                        {subject.map(s=>
                            <li key={s.id} onClick={() => {clickedSubject(s)}}>{s.name}</li>
                        )}
                    </ul>
                </div>
                <div className="Op">
                    <h1>Lista de professores</h1>
                    { availableTeacher.length === 0 ? <p>Por favor, selecione uma disciplina</p> :
                        <ul>
                            {availableTeacher.map(t => <li key={t.id} onClick={()=>setChosenTeacher(t)}>{t.name}</li> )}
                        </ul>
                    }
                </div>
                <input
                    type="text"
                    value={link}
                    onChange={(e)=> setLink(e.target.value)}
                    placeholder="Link da prova"
                    required
                />
                <button type="submit">Cadastrar Prova</button>
            </Form>
        </Container>
    );
}