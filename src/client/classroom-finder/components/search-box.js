import React, { useState } from "react";
import {
  Input,
  Button 
} from "@ombiel/aek-lib"; 
import PropTypes from "prop-types";
import commonStyles from "../css/common-styles.css";
import homePageStyles from "../css/homepage-styles.css";
import { buildingNameList} from "../constants";
export default function SearchBox(props) {

  const [searchKeyword, setSearchKeyword] = useState('');

  const handleRedirect = () =>{
    if (searchKeyword.length < 2) {
        alert("Please enter at least 2 characters.");
        return;
    }
    props?.router?.goto(`#/search/${searchKeyword}`);
  }
//   const [results, setResults] = useState([]);
/*
  const handleSearch = ()=>{

    if (searchKeyword.length < 2) {
        alert("Please enter at least 2 characters.");
        return;
    }

    let searchResults = {};
    let buildingResults = [];
    let classroomResults = [];
    for (let building of buildingNameList) {
      if (building.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
        buildingResults.push(building.name);
      }
      for (let room of building.classrooms) {
        if (room.toLowerCase().includes(searchKeyword.toLowerCase())) {
            classroomResults.push(room);
        }
      }
    }
    
    //TODO: Implement search building/classroom name
    if (buildingResults.length!==0 || classroomResults.length!==0) {
      //TODO: If building/classroom exists, show them results
      searchResults["buildingResults"] = buildingResults;
      searchResults["classroomResults"] = classroomResults;
    //   setResults(searchResults);
    //   console.log(searchResults);
      props?.router?.goto(`#/search/${searchResults}`);
    }
    else {
      props?.router?.goto(`#/search/${searchKeyword}`);
    }
        
  };
  */
  return (
    <div className={homePageStyles.searchBox}>
      <Input name="name" placeholder="Search..." fluid size="large">
        <input onChange={(e)=>{ setSearchKeyword(e.target.value); }} />
        <Button icon="search" onClick={handleRedirect} className={commonStyles.btnGreen}>Search</Button>
      </Input>
    </div>
  );
}

SearchBox.prototype = {
  router: PropTypes.object,
};
