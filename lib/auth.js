import React, {useState, useEffect, useContext, createContext} from 'react'

import firebase from './firebase'
import {createUser} from './db'

const authContext = createContext()

export function AuthProvider({children}) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
    return useContext(authContext)
}

function useProvideAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser)
            createUser(user.uid, user)
            setLoading(false)
            setUser(user)
            return user
        } else {
            setLoading(false)
            setUser(false)
            return false
        }
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser)
        return () => unsubscribe()
    }, [])

    const signInWithGoogle = () => {
        setLoading(true)
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => handleUser(response.user))
    }

    const signOut = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false))
    }


    return {
        user,
        loading,
        signInWithGoogle,
        signOut,
    }
}

const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
    }
}