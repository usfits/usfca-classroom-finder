import React from "react";
import {
} from "@ombiel/aek-lib";

import BuildingButton from "./building-button";
import commonStyles from "../css/common-styles.css";
import buildingStyles from "../css/building-styles.css";
import {buildingNameList} from "../constants";

export default function BuildingList(props) {
  return (
    <div>
      <h4 className={commonStyles.textCenter}>Buildings & Classrooms</h4>
      <hr className={commonStyles.hr50} />
      <div className={buildingStyles.buildingList}>
        { buildingNameList.map(obj => (<BuildingButton key={obj.name} buildingName={obj.name} {...props} />))}
      </div>
    </div>
  );
}
