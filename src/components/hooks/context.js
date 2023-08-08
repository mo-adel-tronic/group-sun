import { createContext, useContext } from "react";
import UserProfile from "./context2";

// Create new context
const UserContext = createContext(undefined)

// Create a provider
export const UserProvider = ({children}) => {
    const user = {
        username: 'mohamed',
        email: 'pla@mail.gg',
        dob: '01/05/2020'
    }
    return <UserContext.Provider value={{user}}>
        {children}
    </UserContext.Provider>
}

// Create custom hook for user
export const useUser = () => useContext(UserContext)


// using hook with root
export default function Root2 () {
    return <UserProvider>
        <App2 />
    </UserProvider>
}

function App2 () {
    return <UserProfile />
}