import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBo1Z6g_yarnXlaCVP0nvblJrvahRJmZ0U",
    authDomain: "dexim-c2e0a.firebaseapp.com",
    projectId: "dexim-c2e0a",
    storageBucket: "dexim-c2e0a.appspot.com",
    messagingSenderId: "714183202981",
    appId: "1:714183202981:web:12ff6114c1013e98efd54c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
