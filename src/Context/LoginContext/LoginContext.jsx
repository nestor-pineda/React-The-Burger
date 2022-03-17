import React from 'react'

export const LoginContext = React.createContext(null)

export const LoginProvider = ({ children }) => {
    const [userLogged, setUserLogged] = React.useState(sessionStorage.getItem("email"));

    const store = {
        userLogged,
        setUserLogged,
    };


    return <LoginContext.Provider value={store}>{children}</LoginContext.Provider>
}