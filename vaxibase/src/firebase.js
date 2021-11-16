import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyB-5Z1fz9rsfVhxCLcSQ1n4hfFdBhYmW1c",
    authDomain: "vaxibase.firebaseapp.com",
    databaseURL: "https://vaxibase-default-rtdb.firebaseio.com",
    projectId: "vaxibase",
    storageBucket: "vaxibase.appspot.com",
    messagingSenderId: "725075045659",
    appId: "1:725075045659:web:459aa09befdc1ae2f5b7be"
  };
  


 firebase.initializeApp(firebaseConfig);

 
 
  
 export default firebase;