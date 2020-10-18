import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBe5ycmEzWBtwieASPm9jObcrZiu8vubZ4",
    authDomain: "vaccine-deployment.firebaseapp.com",
    databaseURL: "vaccine-deployment.firebaseapp.com",
    projectId: "vaccine-deployment",
    storageBucket: "vaccine-deployment.appspot.com",
    messagingSenderId: "949559493523",
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}

export default Firebase;