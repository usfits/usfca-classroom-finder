import React, {useState} from "react";
import PropTypes from "prop-types";
import { Page, BasicSegment} from "@ombiel/aek-lib";
import { buildingNameList} from "../constants";
export default function SearchResults(props) {
  const [buildings, setBuildings] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const searchKeyword = props.ctx.params.keyword;
  
  if(classrooms.length<1 && buildings.length<1){
  let buildingResults = [];
  let classroomResults = [];
  for (const building of buildingNameList) {
    if (building.name.toLowerCase().includes(searchKeyword.toLowerCase())) {
      buildingResults.push(building.name);
    }
    for (const room of building.classrooms) {
      if (room.toLowerCase().includes(searchKeyword.toLowerCase())) {
        classroomResults.push(room);
      }
    }
  }
  console.log(buildingResults);
  console.log(classroomResults);
  if(buildingResults.length===0 && classroomResults.length===0){
    props?.router?.goto(`#/search/no-results/${searchKeyword}`);
  } else{
    setBuildings(buildingResults);
    setClassrooms(classroomResults);
    console.log("State set");
  }
}
  return (
    <Page>
      <BasicSegment>
        <div>
            {buildings.length>0 && <h1>Buildings</h1>}
          {buildings.length>0 && buildings.map((building, index)=>{
            return(
                <h1 key={index}>{building}</h1>
            );
          })}
            {classrooms.length>0 && <h1>Classrooms</h1>}
            {classrooms.length>0 && classrooms.map((classroom, index)=>{
            return(
                <h1 key={index}>{classroom}</h1>
            );
          })}

        </div>
      </BasicSegment>
    </Page>
  );
}

SearchResults.propTypes = {
  ctx: PropTypes.object,
};
  
