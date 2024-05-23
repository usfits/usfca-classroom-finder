import React, { useEffect } from "react";
import {
  Page,
  BasicSegment,
  request,
} from "@ombiel/aek-lib";
import sha256 from "crypto-js/sha256";
import axios from "axios";
import PropTypes from "prop-types";
import RecentSearch from "./recent-search";

import BuildingList from "./building-list";

import SearchBox from "./search-box";
import buildingStyles from "../css/building-styles.css";
import commonStyles from "../css/common-styles.css";
import {CAMPUSM_ASSETS_SANDBOX, HERO_IMAGE, API} from "../constants";

export default function HomePage(props) {
  const { masterData } = props;
  const { userid } = props;
  const { classroomPage } = props;
  const { setMasterData } = props;
  const { setUserId } = props;
  const { refreshCache } = props;
  const { router } = props;


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

  useEffect(() => {
    if (masterData !== null) {
      if (classroomPage.classroomPage !== '') {
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
  userid: PropTypes.string,
  classroomPage: PropTypes.object,
  setMasterData: PropTypes.func,
  setUserId: PropTypes.func,
  refreshCache: PropTypes.func,
};
