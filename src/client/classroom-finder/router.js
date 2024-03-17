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
import { API } from "./constants";
const router = new AekReactRouter({useHash: false});

export default function Router() {

  const [masterData, setMasterData] = useState(null);
  const [userid, setUserId] = useState(null);
  
  const fetchMasterData = async () =>{
    try {
      const response = await axios.get(`${API}/all`);
      console.log(response.data.data);
      setMasterData(response.data.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  const fetchUserId = () => {
    request
    .action("get-user", { sso: true })
    .then((response) => {
      setUserId(sha256(response.body.username).toString());
    });
  };
  
  useEffect(() => {
    if (masterData === null) {
      fetchMasterData();    
    }
    if (userid === null) {
      fetchUserId();
    }
  }, [masterData]);
    
  return (
    <RouterView router={router}>
      <HomePage path="/" {...{router, masterData, userid}} />
      <SearchResults path="/search/:keyword" {...{router, masterData}} />
      <NoResultsFound path="/search/no-results/:keyword" {...{router, masterData}} />
      <ClassrooomList path="/classroom/:building" {...{router, masterData, userid}} />
    </RouterView>
  );
}
