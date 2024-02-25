import React from "react";
import {
  Page,
  BasicSegment
} from "@ombiel/aek-lib";
import PropTypes from "prop-types";
import RecentSearch from "./recent-search";

import BuildingList from "./building-list";

import SearchBox from "./search-box";



export default function HomePage(props) {
  
  

  return (
    <Page>
      <BasicSegment>
        <div>
          <RecentSearch />
      
          <BuildingList {...props} />

          <SearchBox {...props} />
        </div>
      </BasicSegment>
    </Page>
  );
}

HomePage.propTypes = {
  router: PropTypes.object,
};
