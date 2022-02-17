// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArnacGzrfb9ALtE6xwV7CFJLZb0c-sCfE",
  authDomain: "pulcuwines-ecommerce.firebaseapp.com",
  projectId: "pulcuwines-ecommerce",
  storageBucket: "pulcuwines-ecommerce.appspot.com",
  messagingSenderId: "48192455433",
  appId: "1:48192455433:web:75d8c324bc9cf50fb209d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const getFirestoreApp=() =>{
  return app
}
