import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqaD1v8itknCNdr_0DFYQhe8ElASzf1RE",
  authDomain: "cinema-app-ea4a7.firebaseapp.com",
  projectId: "cinema-app-ea4a7",
  storageBucket: "cinema-app-ea4a7.appspot.com",
  messagingSenderId: "1020605952791",
  appId: "1:1020605952791:web:50ddf535766ceee412fd52",
  measurementId: "G-1QG39T14HN",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as fire };
