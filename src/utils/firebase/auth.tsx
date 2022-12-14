import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth } from "./initialize";

export const newUser = (email: string, password: string, fullname: string, navigate: any, restartForms: any) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            updateProfile(userCredential.user, {
                displayName: fullname.toLowerCase().split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')
            })
            alert("Usuário cadastrado com sucesso!");
            signOut(auth)
                .then(() => navigate('/'))
                .catch((error) => alert("Não foi possível desconectar: " + error.code))
        })
        .catch(error => {
            alert("Email já está em uso");
            restartForms();
        });
}

export const signIn = (email: string, password: string, navigate: any, setError: any) => {
    signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            navigate('/home');
        })
        .catch(error => {
            setError(true);
            password = "";
        });
}

export const userSignOut = (navigate: any) => {
    signOut(auth).then(() => {
        navigate('/');
    }).catch((error) => {
        alert("Não foi possível desconectar: " + error.code)
    });
}