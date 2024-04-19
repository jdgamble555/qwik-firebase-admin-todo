import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup as _signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { isBrowser } from '@builder.io/qwik/build';

// import your .env variable
// PUBLIC_FIREBASE_CONFIG={YOUR FIREBASE CONFIG}
// make sure the Firebase keys are in Quotes ""
const firebase_config = JSON.parse(import.meta.env.PUBLIC_FIREBASE_CONFIG);

// initialize firebase

const app = getApps().length ? initializeApp(firebase_config) : getApp();

export const db = getFirestore(app);
export const auth = isBrowser ? getAuth(app) : null;
export const signInWithPopup = isBrowser ? _signInWithPopup : null;