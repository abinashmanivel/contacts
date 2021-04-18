 import firebase from 'firebase';
 
 var firebaseConfig = {
    apiKey: "AIzaSyAiOxNP2QWW9DEGBW72WeGaRvkOBkBmGno",
    authDomain: "login-3467d.firebaseapp.com",
    projectId: "login-3467d",
    storageBucket: "login-3467d.appspot.com",
    messagingSenderId: "373329146573",
    appId: "1:373329146573:web:1c7b318f590b934407ef84"
  };

  const fire =  firebase.initializeApp(firebaseConfig);

  export default fire;