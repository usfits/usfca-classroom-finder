import React, { useState } from "react";
import {
  Input,
  Button 
} from "@ombiel/aek-lib"; 
import PropTypes from "prop-types";
import commonStyles from "../css/common-styles.css";
import homePageStyles from "../css/homepage-styles.css";

export default function SearchBox(props) {

  const [searchKeyword, setSearchKeyword] = useState('');

  const handleRedirect = () =>{
    if (searchKeyword.length < 2) {
        alert("Please enter at least 2 characters.");
        return;
    }
    props?.router?.goto(`#/search/${searchKeyword}`);
  }
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
