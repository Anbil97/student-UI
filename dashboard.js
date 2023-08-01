import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StudentList from './StudentList';
import TeacherList from './TeacherList';
import StudentForm from './StudentForm';
import TeacherForm from './TeacherForm';

const Dashboard = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/students">Students</Link></li>
          <li><Link to="/teachers">Teachers</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route path="/students" exact component={StudentList} />
        <Route path="/students/add" component={StudentForm} />
        <Route path="/students/edit/:id" component={StudentForm} />
        <Route path="/teachers" exact component={TeacherList} />
        <Route path="/teachers/add" component={TeacherForm} />
        <Route path="/teachers/edit/:id" component={TeacherForm} />
      </Switch>
    </Router>
  );
};

export default Dashboard;

