import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnBjC2dSYxYi94_GzmtYX1obIGp4nbE8I",
    authDomain: "entrega-final-react-ignacio.firebaseapp.com",
    projectId: "entrega-final-react-ignacio",
    storageBucket: "entrega-final-react-ignacio.appspot.com",
    messagingSenderId: "998401752447",
    appId: "1:998401752447:web:2a4b7f43377ff466342e4a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);