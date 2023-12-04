import {Navigate} from "react-router-dom";

export const PrivateRoute = ({element}) => {
    const isAuthenticated = JSON.parse(localStorage.getItem('user'));
    return isAuthenticated ? (element) : <Navigate to="/login" replace={true}/>
}