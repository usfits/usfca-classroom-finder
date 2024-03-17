import React from "react";
import {
  Button,
  request 
} from "@ombiel/aek-lib";
import axios from "axios";
import {API} from "../constants";
import classroomStyles from "../css/classroom-styles.css";

export default function ClassroomButton(props) {
  const classroomName = props.classroomName;
  const classroomObj = props.classroomObj;
  const userid = props.userid;

  const updateInteraction = async(userid) =>{
    //   console.log(response); 
    axios.post(`${API}/classroom`,
      {
        userid: userid,
        classroom: classroomObj
      });
  };

  const handleClassroomClick = (classroomName) =>{
    updateInteraction(userid);
    //router.goto(`#/classroom/${classroomName}`);
  };
  
  return (
    <Button onClick={()=>handleClassroomClick(classroomName)} className={classroomStyles.classroomButton}>{classroomName}</Button>
  );
}
  
