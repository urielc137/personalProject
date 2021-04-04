import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB_O1q4O3Pt7nTx3wthV8fxGuqx_slZzu8",
    authDomain: "login-ecb7f.firebaseapp.com",
    projectId: "login-ecb7f",
    storageBucket: "login-ecb7f.appspot.com",
    messagingSenderId: "1095893359890",
    appId: "1:1095893359890:web:8d0971df9212d0ba99a7cb"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
export default fire;