import React, {useState} from "react";
import PropTypes from "prop-types";
import { Page, BasicSegment} from "@ombiel/aek-lib";
import HomePageButton from "./home-page-button";
import BuildingButton from "./building-button";
import ClassroomButton from "./classroom-button";
import buildingStyles from "../css/building-styles.css";
import commonStyles from "../css/common-styles.css";
export default function SearchResults(props) {
  const [buildings, setBuildings] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const searchKeyword = props.ctx.params.keyword;
  const masterData = props?.masterData;
  if(classrooms.length<1 && buildings.length<1){
  let buildingResults = [];
  let classroomResults = [];
  if(masterData){
  for (const building of masterData) {

    if (building.building.toLowerCase().includes(searchKeyword.toLowerCase())) {
      buildingResults.push(building.building);
    }
    for (const room of building.classrooms) {
      if (room.room.toLowerCase().includes(searchKeyword.toLowerCase())) {
        classroomResults.push(room.room);
      }
    }
  }
}
  if(buildingResults.length===0 && classroomResults.length===0){
    props?.router?.goto(`#/search/no-results/${searchKeyword}`);
  } else{
    setBuildings(buildingResults);
    setClassrooms(classroomResults);
  }
}
  return (
    <Page>
      <BasicSegment>
        <div>
            {buildings.length>0 && <h1 className={commonStyles.textCenter}>Buildings</h1>}
          {buildings.length>0 && buildings.map((building, index)=>{
            return(
                <div className={buildingStyles.buildingList}>
                    <BuildingButton key={index} buildingName={building} {...props} />
                </div>
            );
          })}
            {classrooms.length>0 && <h1 className={commonStyles.textCenter}>Classrooms</h1>}
            {classrooms.length>0 && classrooms.map((classroom, index)=>{
            return(
                <ClassroomButton key={index} classroomName={classroom} />
            );
          })}

        </div>
        <div className={commonStyles.textCenter}>
            <HomePageButton />
        </div>
      </BasicSegment>
    </Page>
  );
}

SearchResults.propTypes = {
  ctx: PropTypes.object,
  masterData: PropTypes.array,
};
  
