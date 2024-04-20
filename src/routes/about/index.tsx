import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { AboutDoc } from "~/lib/about";
import { getServerFirebase } from "~/lib/firebase-admin";

export const useAboutPage = routeLoader$(async ({ cacheControl, env }) => {

    cacheControl({ maxAge: 31536000, public: true });

    const { admin } = getServerFirebase(env);

    const snap = await admin.doc('/about/ZlNJrKd6LcATycPRmBPA').get();

    return snap.data() as AboutDoc;

    //return await getAbout();
});

export default component$(() => {

    const about = useAboutPage();

    return (
        <div class="flex items-center justify-center my-5">
            <div class="border w-[400px] p-5 flex flex-col gap-3">
                <h1 class="text-3xl font-semibold">{about.value.name}</h1>
                <p>{about.value.description}</p>
            </div>
        </div>
    );
});