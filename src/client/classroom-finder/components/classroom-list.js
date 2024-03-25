import React from "react";
import { Page, BasicSegment } from "@ombiel/aek-lib";
import commonStyles from "../css/common-styles.css";
import classroomStyles from "../css/classroom-styles.css";
import ClassroomButton from "./classroom-button";

import HomePageButton from "./home-page-button";
import SearchBox from "./search-box";


export default function ClassrooomList(props) {
  const buildingName = props.ctx.params.building;
  
  const masterData = props?.masterData;
  
  const buildingObj = masterData.find(building=> building.building.indexOf(buildingName) !== -1);
  
  const classrooms = buildingObj.classrooms;

  return (
    <Page>
      <BasicSegment>
        <div className={classroomStyles.classroomListDiv}>
          <h4 className={commonStyles.textCenter}>Select a classroom</h4>
          <hr className={commonStyles.hr50} />
          <div className={classroomStyles.classroomList}>
            {
              classrooms.map((classroom, index) => (<ClassroomButton key={index} classroomObj={classroom} classroomName={classroom.room} {...props} />)) 
            }
          </div>
        </div>
        <div className={commonStyles.textCenter}>
          <br /><br />
          <HomePageButton />
        </div>
        <SearchBox {...props} />
      </BasicSegment>
    </Page>
  );
}
