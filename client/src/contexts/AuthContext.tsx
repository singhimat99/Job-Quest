import React, { createContext, useContext, useState, useEffect } from "react";
import {
    deleteUser,
    User,
    signOut,
    onAuthStateChanged,
    signInAnonymously,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase";

interface TAuthContext {
    signInWithGoogle: () => Promise<void>;
    signOut: (user: User | null) => void;
    currentUser: User | null;
}

const AuthContext = createContext<TAuthContext | null>(null);

export function useAuth() {
    return useContext(AuthContext);
}

type Props = {
    children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [pending, setPending] = useState(true);
    async function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            const response = await signInWithPopup(auth, provider);
            setCurrentUser(response.user);
        } catch (error: any) {
            console.error(error.code, error.message);
        }
    }
    function signOut(user: User | null) {
        if (!user) return;
        let isAnon = user.isAnonymous;
        signOut(user);
        isAnon && deleteUser(user);
    }
    const contextObject = {
        signInWithGoogle,
        signOut,
        currentUser,
    };
    return (
        <AuthContext.Provider value={contextObject}>
            {children}
        </AuthContext.Provider>
    );
}
