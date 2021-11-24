import {  Route, Redirect } from 'react-router-dom'




const ProtectedRoutes = ({component:Component, ...rest }) => {
    const login = false
    return ( 
        <Route {...rest} render = { (props) => 
            {
               if(login)
               {

                   return  <Component {...props}   />  
               }
               else 
               {
                return <Redirect to='/not-allowed'  />

               }

            } } />
     );
}
 
export default ProtectedRoutes;