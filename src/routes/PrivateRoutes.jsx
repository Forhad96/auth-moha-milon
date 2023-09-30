import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    if(isLoading){
        return <div className="flex items-center justify-center h-screen">
            <span className="loading loading-infinity w-24"></span>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoutes;
PrivateRoutes.propTypes={
    children:PropTypes.node
}