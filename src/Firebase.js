/* import firebase from 'firebase/compat/app';
import 'firebase//compat/firestore';*/
//import { getStorage } from "firebase/storage";

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPCqpGxpgIcGDS2RW4zyVa6OgTWs7hM8g",
  authDomain: "placements-management-system.firebaseapp.com",
  databaseURL: "https://placements-management-system-default-rtdb.firebaseio.com",
  projectId: "placements-management-system",
  storageBucket: "placements-management-system.appspot.com",
  messagingSenderId: "427444335163",
  appId: "1:427444335163:web:919f4b128e34bfd263621e",
  measurementId: "G-2KZ1ZKZ194"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
//const storage = getStorage(firebaseApp);
const storage = firebase.storage();


export { db, auth, storage};

/* const firebaseApp = firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db=firebase.firestore();
export {firebaseApp,db,storage}; */
