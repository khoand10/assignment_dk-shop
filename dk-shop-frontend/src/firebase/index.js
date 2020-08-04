import firebase from 'firebase/app';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCP-a6p2wzOD6DrpGlwu8JbIZIKG9Pfqpw",
    authDomain: "dk-shop-f2a81.firebaseapp.com",
    databaseURL: "https://dk-shop-f2a81.firebaseio.com",
    projectId: "dk-shop-f2a81",
    storageBucket: "dk-shop-f2a81.appspot.com",
    messagingSenderId: "803788390166",
    appId: "1:803788390166:web:4da876ee91ba6fdd071a37",
    measurementId: "G-RVHSD6Q697"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}