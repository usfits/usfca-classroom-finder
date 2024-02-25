import React from "react";
import {
  AekReactRouter,
  RouterView
} from "@ombiel/aek-lib";

import HomePage from "./components/home-page";
import NoResultsFound from "./components/no-results-found";
const router = new AekReactRouter({useHash: false});

export default function Router() {
  return (
    <RouterView router={router}>
      <HomePage path="/" />
      <NoResultsFound path="/search" />
    </RouterView>
  );
}
