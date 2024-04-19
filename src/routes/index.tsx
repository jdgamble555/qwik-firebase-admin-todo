import type { DocumentHead } from "@builder.io/qwik-city";
import Home from "~/components/home";

export default () => <Home />;

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
