

import {  Route, Switch } from 'react-router';
import Layout from '../Layout/index';
import ProtectedRoutes from './ProtectedRoutes';
import NotAllowed from '../Pages/NotAllowed';
import Dashboard from '../Pages/Dashboard/index';
import StudyingStudents from '../Pages/StudyingStudents/index';





const NavRoutes = (props) => {

    return ( 
        <Switch>
             <Route path='/not-allowed'    component={ NotAllowed} ></Route> 
             <Route path='/studying_students'    component={ StudyingStudents } ></Route> 
             <Route path='/graduate_students'    component={ NotAllowed} ></Route> 
             <Route path='/academic_calendar'    component={ NotAllowed} ></Route> 
             <Route path='/mail_box'    component={ NotAllowed} ></Route> 
             {/* <ProtectedRoutes path='/'  exact  component={ Layout } ></ProtectedRoutes>  */}
             <Route path='/'    component={ Dashboard} ></Route> 
        </Switch>
     );
}
 
export default (NavRoutes);