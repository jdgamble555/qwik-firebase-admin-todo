import { EnvGetter } from '@builder.io/qwik-city/middleware/request-handler';
import { Firestore } from '@google-cloud/firestore';


// initialize admin firebase only once

export const getServerFirebase = (env: EnvGetter) => {
    const credentials = JSON.parse(
        env.get('PRIVATE_FIREBASE_ADMIN_CONFIG')!
    );

    const admin = new Firestore({
        preferRest: true,
        credentials,
        projectId: credentials.project_id
    });


    return {
        //auth: initializeAuth(app, { pref}),
        admin
    }
};


export const COOKIE_NAME = '__session';
