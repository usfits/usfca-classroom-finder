import React, { useEffect } from "react";
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
import {CAMPUSM_ASSETS_SANDBOX, HERO_IMAGE} from "../constants";
export default function HomePage(props) {
  const { masterData } = props;
  const { classroomPage } = props;

  useEffect(() => {
    if (masterData !== null) {
      if (classroomPage.classroomPage !== '') {
        const { router } = props;
        router.goto(`#/classroom-detail/${classroomPage}`);
      }
    }
  }, [classroomPage, masterData]);

  return (
    <Page>
      <BasicSegment>
        <div>
          <img src={CAMPUSM_ASSETS_SANDBOX + HERO_IMAGE} className={commonStyles.heroImage} alt="hero"></img>
          <h3 className={commonStyles.bannerText}>CLASSROOM FINDER</h3>
          <div className={buildingStyles.buildingListDiv}>
            <RecentSearch {...props} />
          </div>
          <h5 className={commonStyles.buildingBannerText}>SELECT A BUILDING</h5>
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
  masterData: PropTypes.array,
  classroomPage: PropTypes.object
};
