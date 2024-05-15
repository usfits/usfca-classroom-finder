import React, {useEffect, useState} from "react";
import axios from "axios";
import {
  AekReactRouter,
  RouterView,
  request
} from "@ombiel/aek-lib";
import sha256 from "crypto-js/sha256";

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
  
  const fetchMasterData = async () =>{
    try {
      const response = await axios.get(`${API}/all`);
      console.log(response.data.data);
      setMasterData(data => response.data.data);
      router.goto("#/");
    }
    catch (error) {
      console.log(error);
    }
  };

  const refreshCache = async (id) => {
    const response = await axios.get(`${API}/classroom`, {params: { userid: id }});
    setRecent(response.data !== null ? response.data.classrooms : []);
    console.log("Cache refreshed");
  };

  const fetchUserId = () => {
    request
    .action("get-user", { sso: true })
    .then((response) => {
      const hashedId = sha256(response.body.username).toString();
      setUserId(hashedId);
      refreshCache(hashedId);
    });
  };
  
  useEffect(() => {
    if (userid === null) {
      fetchUserId();
    }
    if (masterData === null) {
      fetchMasterData();  
    }
  }, [userid, masterData]);

  return (
    masterData && userid && (
      <RouterView router={router}>
        <HomePage path="/" {...{router, masterData, userid, recent, refreshCache, classroomPage}} />
        <SearchResults path="/search/:keyword" {...{router, masterData}} />
        <NoResultsFound path="/search/no-results/:keyword" {...{router, masterData}} />
        <ClassrooomList path="/classroom/:building" {...{router, masterData, userid, refreshCache}} />
        <ClassroomDetail path="/classroom-detail/:building/:classroom" {...{router, masterData}} />   
      </RouterView>
    )
  );
}
