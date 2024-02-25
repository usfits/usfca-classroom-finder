import React from "react";
import {
  Button
} from "@ombiel/aek-lib";
import buildingStyles from "../css/building-styles.css";

export default function BuildingButton(props) {
  const buildingName = props.buildingName;
  const router = props.router;
  console.log(props)
  const handleBuildingClick = (building) =>{
    router.goto(`#/classroom/${building}`);
  };

  return (
    <Button onClick={()=>handleBuildingClick(buildingName)} className={buildingStyles.buildingButton}>{buildingName}</Button>
  );
}
