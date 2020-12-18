import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import ListOp from './pages/ListOp';
import CreateExam from './pages/CreateExam';
import ByTeacherList from './pages/ByTeacherList';
import BySubjectList from './pages/BySubjectList';
import ExamsList from './pages/ExamsList';
import ExamsListByS from './pages/ExamsListByS';

export default function App(){
    return(
        <Router>
            <Switch>
                <Route path="/exams-list-s/:id" component={ExamsListByS}/>
                <Route path="/exams-list/:id" component={ExamsList}/>
                <Route path="/list-by-teacher" component={ByTeacherList}/>
                <Route path="/list-by-subject" component={BySubjectList}/>
                <Route path="/list-op" component={ListOp}/>
                <Route path="/create" component={CreateExam}/>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    );
}