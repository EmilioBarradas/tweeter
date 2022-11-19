import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCZ4TF-KMf-pgYwwi_UAdg2qoVmhRGEaG4',
	authDomain: 'saving-twitter.firebaseapp.com',
	projectId: 'saving-twitter',
	storageBucket: 'saving-twitter.appspot.com',
	messagingSenderId: '528257431182',
	appId: '1:528257431182:web:336bef4ad07b22265d3bdf',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
