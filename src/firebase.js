// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5fnHhXAqLMmTKiQ2tFl6cE8hw5tvsvfY",
    authDomain: "fm-mentor-movieapp.firebaseapp.com",
    projectId: "fm-mentor-movieapp",
    storageBucket: "fm-mentor-movieapp.appspot.com",
    messagingSenderId: "406543689973",
    appId: "1:406543689973:web:3818dd5d944ee389be3dbc",
    measurementId: "G-8SR20TH5F2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
