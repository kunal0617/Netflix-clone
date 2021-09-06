import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
//import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDuBIZkJdHzKYlws1DKnsEmGdUQK0flFoU',
  authDomain: 'netflix-74de8.firebaseapp.com',
  projectId: 'netflix-74de8',
  storageBucket: 'netflix-74de8.appspot.com',
  messagingSenderId: '749110090789',
  appId: '1:749110090789:web:a64f43952175d6ce72b3cc',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
