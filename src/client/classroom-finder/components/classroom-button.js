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

  const updateInteraction = async() =>{
    request
    .action("get-user", { sso: true })
    .then((response) => {
    //   console.log(response); 
      if (response.body) {
        axios.post(`${API}/classroom`,
          {
            userid: response.body.username,
            classroom: classroomObj
          });
      }
    });
  };

  const handleClassroomClick = (classroomName) =>{
    updateInteraction();
    //router.goto(`#/classroom/${classroomName}`);
  };
  
  return (
    <Button onClick={()=>handleClassroomClick(classroomName)} className={classroomStyles.classroomButton}>{classroomName}</Button>
  );
}
  
