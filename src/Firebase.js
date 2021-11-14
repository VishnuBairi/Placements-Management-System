/* import firebase from 'firebase/compat/app';
import 'firebase//compat/firestore';*/
//import { getStorage } from "firebase/storage";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCWdRZXdSp9gxMj8QoK8-adkbqtuluFhwo",
  authDomain: "placement-management-sys.firebaseapp.com",
  projectId: "placement-management-sys",
  storageBucket: "placement-management-sys.appspot.com",
  messagingSenderId: "544507284867",
  appId: "1:544507284867:web:7e06816c1eaa0def307ab6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
//const storage = getStorage(firebaseApp);
const storage = firebase.storage();

export { db, auth, storage };

/* const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db=firebase.firestore();
export {firebaseApp,db,storage}; */
