import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCqwCGysF42A0WC6_Z3e5YIPUXFYZ5Zc6M",
    authDomain: "very-hot-burgers-1d5b3.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-1d5b3-default-rtdb.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;