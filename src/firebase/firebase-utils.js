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


export const createUserProfileDocument = (userAuth, rest) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  userRef.get()
  .then(snapShot => {
    if (!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      userRef.set({displayName, email, createdAt, ...rest})
    }
  })
  .catch(err => console.log('Error creating user:', err));
  return userRef;
}


export const addCollectionAndDocs = (collectionKey, docsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  docsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  })

  batch.commit()
}


export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;