import React, {useEffect, useState} from "react";
import axios from "axios";
import {
  AekReactRouter,
  RouterView
} from "@ombiel/aek-lib";

import HomePage from "./components/home-page";
import NoResultsFound from "./components/no-results-found";
import ClassrooomList from "./components/classroom-list";
import SearchResults from "./components/search-results";
import { API } from "./constants";
const router = new AekReactRouter({useHash: false});

export default function Router() {

  const [masterData, setMasterData] = useState(null);
  
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
  
  useEffect(() => {
    if (masterData === null) {
      fetchMasterData();    
    }
  }, [masterData]);
    
  return (
    <RouterView router={router}>
      <HomePage path="/" {...{router, masterData}} />
      <SearchResults path="/search/:keyword" {...{router, masterData}} />
      <NoResultsFound path="/search/no-results/:keyword" {...{router, masterData}} />
      <ClassrooomList path="/classroom/:building" {...{router, masterData}} />
    </RouterView>
  );
}
