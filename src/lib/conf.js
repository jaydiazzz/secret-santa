// import firebase from 'firebase';

// const firebaseConfig = {
//   apiKey            : 'AIzaSyDzb0UgoQvQy_tH-L11DLPq13i5zrrk4IA',
//   authDomain        : 'spooky-baskets.firebaseapp.com',
//   databaseURL       : 'https://spooky-baskets.firebaseio.com',
//   projectId         : 'spooky-baskets',
//   storageBucket     : 'spooky-baskets.appspot.com',
//   messagingSenderId : '1003388057214',
//   appId             : '1:1003388057214:web:68da02fbccfddbb35cca2f',
//   measurementId     : 'G-JXBN8F0J27'
// };

// if ( !firebase.apps.length ) {
// 	console.log( 'tried to connect' );
// 	firebase.initializeApp( firebaseConfig );
// }

// export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey            : "AIzaSyBLkB46gUITYAU8MkO7bhFxw7ctTjKPPqU",
  authDomain        : "secret-santa-db63e.firebaseapp.com",
  projectId         : "secret-santa-db63e",
  storageBucket     : "secret-santa-db63e.appspot.com",
  messagingSenderId : "556509656076",
  appId             : "1:556509656076:web:a778bcc506aed5e5486a29"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );