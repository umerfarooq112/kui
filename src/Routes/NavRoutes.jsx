

import {  Route, Switch } from 'react-router';
import Layout from '../Layout/index';
import ProtectedRoutes from './ProtectedRoutes';
import NotAllowed from '../Pages/NotAllowed';
import Dashboard from '../Pages/Dashboard/index';
import StudyingStudents from '../Pages/StudyingStudents/index';
import GradeRecord from '../Components/StudyingStudents/Grade_Records'
import Login from '../Pages/Auth/Login';
import GraduateStudents from '../Pages/GraduateStudents/index';
import AcademicCalendar from '../Pages/AcademicCalendar/index';




const NavRoutes = (props) => {

    return ( 
        <Switch>
             <Route path='/dashboard' exact={true}   component={ Dashboard} ></Route> 
             <Route path='/graduate_students'    component={ GraduateStudents} ></Route> 
             
             <Route path='/studying_students/:id'    component={ GradeRecord } ></Route> 
             <Route path='/studying_students'    component={ StudyingStudents } ></Route> 
             <Route path='/graduate_students'    component={ NotAllowed} ></Route> 
             <Route path='/academic_calendar'    component={ AcademicCalendar} ></Route> 
             <Route path='/mail_box'    component={ NotAllowed} ></Route> 
             {/* <ProtectedRoutes path='/'  exact  component={ Layout } ></ProtectedRoutes>  */}
             <Route path='/'    component={ Login } ></Route> 

        </Switch>
     );
}
 
export default (NavRoutes);