import React, {useState} from "react";
import axios from "axios";
import {
  AekReactRouter,
  RouterView,
} from "@ombiel/aek-lib";

import HomePage from "./components/home-page";
import NoResultsFound from "./components/no-results-found";
import ClassrooomList from "./components/classroom-list";
import SearchResults from "./components/search-results";
import ClassroomDetail from "./components/classroom-detail";
import { API } from "./constants";
const router = new AekReactRouter({useHash: false});

export default function Router(classroomPage) {
  const [masterData, setMasterData] = useState(null);
  const [userid, setUserId] = useState(null);
  const [recent, setRecent] = useState(null);

  const refreshCache = async (id) => {
    const response = await axios.get(`${API}/classroom`, {params: { userid: id }});
    setRecent(response.data !== null ? response.data.classrooms : []);
    console.log("Cache refreshed");
  };

  return (
    <RouterView router={router}>
      <HomePage path="/" {...{router, masterData, userid, recent, refreshCache, classroomPage, setMasterData, setUserId}} />
      <SearchResults path="/search/:keyword" {...{router, masterData}} />
      <NoResultsFound path="/search/no-results/:keyword" {...{router, masterData}} />
      <ClassrooomList path="/classroom/:building" {...{router, masterData, userid, refreshCache}} />
      <ClassroomDetail path="/classroom-detail/:building/:classroom" {...{router, masterData}} />   
    </RouterView>
  );
}
