import { EnvGetter } from '@builder.io/qwik-city/middleware/request-handler';
import { getApps, initializeApp, cert, getApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { initializeFirestore } from 'firebase-admin/firestore';


// initialize admin firebase only once

export const getServerFirebase = (env: EnvGetter) => {
    const firebase_config = JSON.parse(
        env.get('PRIVATE_FIREBASE_ADMIN_CONFIG')!
    )
    const app = getApps().length ? getApp() : initializeApp({
        credential: cert(firebase_config)
    });
    return {
        auth: getAuth(app),
        admin: initializeFirestore(app, { preferRest: true })
    }
};


export const COOKIE_NAME = '__session';
