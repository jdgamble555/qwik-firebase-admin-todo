import { doc, getDoc, getFirestore } from "firebase/firestore/lite";
import { app } from "./firebase";

export type AboutDoc = {
    name: string;
    description: string;
};

export const getAbout = async () => {

    const db = getFirestore(app);

    const aboutSnap = await getDoc(
        doc(db, '/about/ZlNJrKd6LcATycPRmBPA')
    );

    if (!aboutSnap.exists()) {
        throw 'Document does not exist!';
    }

    return aboutSnap.data() as AboutDoc;
};