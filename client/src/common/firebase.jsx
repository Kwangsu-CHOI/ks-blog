import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBqOewtgpadogSjDBQLNths5IsEc8F5GbU",
	authDomain: "blog-65bcd.firebaseapp.com",
	projectId: "blog-65bcd",
	storageBucket: "blog-65bcd.appspot.com",
	messagingSenderId: "311859743031",
	appId: "1:311859743031:web:c5ba8ab2f6cecdc03932b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
	let user = null;

	await signInWithPopup(auth, provider)
		.then((result) => {
			user = result.user;
		})
		.catch((err) => {
			console.log(err);
		});

	return user;
};
