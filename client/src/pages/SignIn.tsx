import React from "react";
import { useAuth } from "../contexts/AuthContext";

type Props = {};

export default function SignIn({}: Props) {
    const AuthObj = useAuth();
    return (
        <div>
            <button onClick={() => AuthObj?.signInWithGoogle()}>
                Sign In with Google
            </button>
        </div>
    );
}
