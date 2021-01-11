import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA9-tICz1NAR6O_IqCQA0-IJj2J0EYNe6w",
    authDomain: "uocify-66e39.firebaseapp.com",
    databaseURL: "https://uocify-66e39.firebaseio.com",
    projectId: "uocify-66e39",
    storageBucket: "uocify-66e39.appspot.com",
    messagingSenderId: "57909080420",
    appId: "1:57909080420:web:3d43132bc1eac80c998a71",
    measurementId: "G-Y52YHMZRHC"
};

const app = firebase .initializeApp(firebaseConfig);

export const db = app.database();