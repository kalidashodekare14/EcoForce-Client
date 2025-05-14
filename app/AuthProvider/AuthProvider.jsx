import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase.config';

export const authContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)


    const registrationSystem = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginSystem = (email, password) => {
        true
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser)
        })
    }, [])


    const userInfo = {
        user,
        loading,
        setLoading,
        registrationSystem,
        loginSystem
    }

    return (
        <authContext.Provider value={userInfo}>{children}</authContext.Provider>
    )

};

export default AuthProvider;