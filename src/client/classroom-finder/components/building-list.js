import React from "react";
import {
} from "@ombiel/aek-lib";
import PropTypes from "prop-types";

import BuildingButton from "./building-button";
import buildingStyles from "../css/building-styles.css";
// import {buildingNameList} from "../constants";

export default function BuildingList(props) {
  const buildings = props?.masterData;
  return (
    <div className={buildingStyles.buildingList}>
      {buildings && buildings.map((obj, index) => (<BuildingButton key={index} buildingName={obj.building} {...props} />))}
    </div>
    
  );
}

BuildingList.propTypes = {
  ctx: PropTypes.object,
  masterData: PropTypes.array
};
