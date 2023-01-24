// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCFW-ahUxk2jMVTVTB9MCc_bQ5dt7l2Ry4',
  authDomain: 'petbook-react.firebaseapp.com',
  projectId: 'petbook-react',
  storageBucket: 'petbook-react.appspot.com',
  messagingSenderId: '1085103907969',
  appId: '1:1085103907969:web:6ec2ba17be61410399d980',
  measurementId: 'G-CBT18EE65T',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { app, analytics, db, auth };
