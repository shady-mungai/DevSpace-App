import React from "react";
import { createContext, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser]  = useState(null); 

    const values = {
        currentUser,setCurrentUser
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext