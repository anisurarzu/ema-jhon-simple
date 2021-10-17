import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default initializeAuthentication;

/* steps for authentication 
 ------------------
 Initial Setup
 1.Firebase: create project
 2.Create web app
 3.Get configuration
 4.Initialize firebase
 5.Enable Auth Method
 */
