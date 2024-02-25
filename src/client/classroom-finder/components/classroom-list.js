import React from "react";
import { Page, BasicSegment } from "@ombiel/aek-lib";
import commonStyles from "../css/common-styles.css";
import classroomStyles from "../css/classroom-styles.css";
import ClassroomButton from "./classroom-button";
import { buildingNameList } from "../constants";
import HomePageButton from "./home-page-button";


export default function ClassrooomList(props) {
  const buildingName = props.ctx.params.building;
  
  const buildingObj = buildingNameList.find(building=> building.name.indexOf(buildingName) !== -1);
  const classrooms = buildingObj.classrooms;
  console.log(classrooms);
  return (
    <Page>
      <BasicSegment>
        <div>
          <h4 className={commonStyles.textCenter}>Select a classroom</h4>
          <hr className={commonStyles.hr50} />
          <div className={classroomStyles.classroomList}>
            {
              classrooms.map(classroomName => (<ClassroomButton key={classroomName} classroomName={classroomName} {...props} />)) 
            }
          </div>
          <div className={commonStyles.textCenter}>
            <br /><br />
            <HomePageButton />
          </div>
        </div>
      </BasicSegment>
    </Page>
  );
}
