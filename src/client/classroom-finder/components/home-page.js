import React from "react";
import {
  Page,
  BasicSegment
} from "@ombiel/aek-lib";
import PropTypes from "prop-types";
import RecentSearch from "./recent-search";

import BuildingList from "./building-list";

import SearchBox from "./search-box";
import buildingStyles from "../css/building-styles.css";
import commonStyles from "../css/common-styles.css";
export default function HomePage(props) {
  return (
    <Page>
      <BasicSegment>
        <div>
          <h4 className={commonStyles.textCenter}>Recent Search</h4>
          <hr className={commonStyles.hr50} /><br />
          <div className={buildingStyles.buildingListDiv}>
            {/* <RecentSearch /> */}
            <BuildingList {...props} />
          </div>
          <h4 className={commonStyles.textCenter}>Buildings & Classrooms</h4>
          <hr className={commonStyles.hr50} /><br />
          <div className={buildingStyles.buildingListDiv}>
            <BuildingList {...props} />
          </div>

          <SearchBox {...props} />
        </div>
      </BasicSegment>
    </Page>
  );
}

HomePage.propTypes = {
  router: PropTypes.object,
};
