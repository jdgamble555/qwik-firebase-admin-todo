import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

type AboutDoc = {
    name: string;
    description: string;
};

const firebase_config = JSON.parse(import.meta.env.PUBLIC_FIREBASE_CONFIG);

export const getAbout = async () =>{

    const app = initializeApp(firebase_config);

    const db = getFirestore(app);

    const aboutSnap = await getDoc(doc(db, '/about/ZlNJrKd6LcATycPRmBPA'));

    if (!aboutSnap.exists()) {
        throw 'Document does not exist!';
    }

    return aboutSnap.data() as AboutDoc;
};