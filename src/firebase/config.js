import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGCj4TpeZn9Vd8qWxWKX_CP7qpxTRkdXM",
  authDomain: "recipe-ba335.firebaseapp.com",
  projectId: "recipe-ba335",
  storageBucket: "recipe-ba335.appspot.com",
  messagingSenderId: "747209398005",
  appId: "1:747209398005:web:48cb66e59a64d7633b17bc",
};
// NOTE you must first initialize firebase to use any firebase tools
// init firebase
firebase.initializeApp(firebaseConfig);

//  init services
// NOTE we are only able to init firestore because we imported the firestore above
const projectFirestore = firebase.firestore();

export { projectFirestore };
