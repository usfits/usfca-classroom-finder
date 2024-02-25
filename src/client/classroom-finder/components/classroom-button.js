import React from "react";
import {
  Button
} from "@ombiel/aek-lib";
import classroomStyles from "../css/classroom-styles.css"
export default function ClassroomButton(props) {
  const classroomName = props.classroomName;
  
  const handleClassroomClick = (classroomName) =>{
    //router.goto(`#/classroom/${classroomName}`);
  };
  
  return (
    <Button onClick={()=>handleClassroomClick(classroomName)} className={classroomStyles.classroomButton}>{classroomName}</Button>
  );
}
  
