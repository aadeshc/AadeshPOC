import React, { useContext } from 'react'
import RootComponent from '../components/rootcomponent.js'

export const UserContext = React.createContext();
export const PasswordContext = React.createContext();

const ContextApi = () => {
    return (

        <div>
            <UserContext.Provider value={"Aadesh"}>
                <PasswordContext.Provider value={"Aadesh1234"}>
                    <RootComponent />
                </PasswordContext.Provider>

            </UserContext.Provider>

        </div>
    )
}

export default ContextApi