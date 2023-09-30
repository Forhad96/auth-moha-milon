// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";

import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Home = () => {
const {user} = useContext(AuthContext)

    return (
        <div className="text-center">
            {
                user && <h2 className="text-3xl">Email:{user.email}</h2>
            }
        </div>
    );
};

export default Home;