import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ExamsList from './pages/ExamsList';
import CreateExam from './pages/CreateExam';
import ByTeacherList from './pages/ByTeacherList';
import BySubjectList from './pages/BySubjectList';

export default function App(){
    return(
        <Router>
            <Switch>
                <Route path="/list-by-teacher" component={ByTeacherList}/>
                <Route path="/list-by-subject" component={BySubjectList}/>
                <Route path="/exams" component={ExamsList}/>
                <Route path="/create" component={CreateExam}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}