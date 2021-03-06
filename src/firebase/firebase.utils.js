import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: 'AIzaSyDdn7qmO9t90xW3Mp78_3NnNEkfU19HuKU',
  authDomain: 'my-crown-db-ac0d9.firebaseapp.com',
  databaseURL: 'https://my-crown-db-ac0d9-default-rtdb.firebaseio.com',
  projectId: 'my-crown-db-ac0d9',
  storageBucket: 'my-crown-db-ac0d9.appspot.com',
  messagingSenderId: '747537954259',
  appId: '1:747537954259:web:183ae31b5ba8233526eb26',
  measurementId: 'G-M4SNLTZSK4',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('user');

  const snapShot = await userRef.get();
  // const collectionSnapshot = await collectionRef.get();
  // console.log({
  //   collection: collectionSnapshot.docs.map((doc) => doc.data()),
  // });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  // console.log(collectionRef);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  // here we need convert the array we make to transform and store in the reducer
  // 这是把每个collection的value Assign给collection的title吗
  // 那collection又是什么呢？collections是
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
