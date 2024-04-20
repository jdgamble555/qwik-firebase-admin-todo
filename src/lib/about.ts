import { doc, getDoc, getFirestore } from "firebase/firestore/lite";
import { app } from "./firebase";
import { routeLoader$, server$ } from "@builder.io/qwik-city";
import { getServerFirebase } from "./firebase-admin";
import { component$ } from "@builder.io/qwik";


type AboutDoc = {
    name: string;
    description: string;
};

export const getAbout = server$(async function () {

    const { admin } = getServerFirebase(this.env);

    const aboutSnap = await admin.doc('/about/ZlNJrKd6LcATycPRmBPA').get();

    if (!aboutSnap.exists) {
        return;
    }

    return aboutSnap.data();

});
