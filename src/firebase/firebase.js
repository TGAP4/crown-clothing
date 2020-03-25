import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZr0n2mkvrHqgqiItcJ_xCw8Eam7HxqmE",
    authDomain: "crown-database-ed8fc.firebaseapp.com",
    databaseURL: "https://crown-database-ed8fc.firebaseio.com",
    projectId: "crown-database-ed8fc",
    storageBucket: "crown-database-ed8fc.appspot.com",
    messagingSenderId: "219617685266",
    appId: "1:219617685266:web:46ddde6db938c882624dcb",
    measurementId: "G-DG8HQG94M7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;