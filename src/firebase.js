import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyCDOgF3KM3nQcYCiTUUeBV5EfkUHEG6-M0",
  authDomain: "samersamirbudgee-2021.firebaseapp.com",
  projectId: "samersamirbudgee-2021",
  storageBucket: "samersamirbudgee-2021.appspot.com",
  messagingSenderId: "852013231760",
  appId: "1:852013231760:web:790c695d44212e2ece3215",
  measurementId: "G-DB360D1GN0",
};

/*eslint-disable */

const app = initializeApp(config);

/*eslint-enable */


export default getFirestore();
