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
  const [results, setResults] = useState([]);
  const handleSearch = ()=>{

    if (searchKeyword.length < 3) {
        alert("Please enter at least 3 characters.");
        return;
    }

    let searchResults = [];
    for (let building of buildingNameList) {
      if (building.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
        searchResults.push(building.name);
      }
      for (let room of building.classrooms) {
        if (room.toLowerCase().includes(searchKeyword.toLowerCase())) {
          searchResults.push(room);
        }
      }
    }
    console.log(searchResults);
    //TODO: Implement search building/classroom name
    if (searchResults.length!==0) {
      //TODO: If building/classroom exists, show them results
      setResults(searchResults);
    }
    else {
      props?.router?.goto(`#/search/${searchKeyword}`);
    }
        
  };
  return (
    <div className={homePageStyles.searchBox}>
      <Input name="name" placeholder="Search..." fluid size="large">
        <input onChange={(e)=>{ setSearchKeyword(e.target.value); }} />
        <Button icon="search" onClick={handleSearch} className={commonStyles.btnGreen}>Search</Button>
      </Input>
      {results.map((result, index) => (
        <div key={index}>{result}</div>
      ))}
    </div>
  );
}

SearchBox.prototype = {
  router: PropTypes.object,
};
