import React from "react";
import {
  Button, 
} from "@ombiel/aek-lib";
import axios from "axios";
import PropTypes from "prop-types";
import {API} from "../constants";
import classroomStyles from "../css/classroom-styles.css";

export default function ClassroomButton(props) {
  const classroomName = props.classroomName;
  const classroomObj = props.classroomObj;
  const buildingName = props.buildingName;
  const router = props.router;
  const userid = props.userid;

  const updateInteraction = async(userid) =>{
    let classroom = {
      ...classroomObj,
      building: buildingName
    };
    await axios.post(`${API}/classroom`,
      {
        userid: userid,
        classroom: classroom
      });
    props.refreshCache(userid);
  };

  const handleClassroomClick = (classroomName) =>{
    updateInteraction(userid);
    router.goto(`#/classroom-detail/${buildingName}/${classroomName}`);
  };
  
  return (
    <Button onClick={()=>handleClassroomClick(classroomName)} className={classroomStyles.classroomButton}>{classroomName}</Button>
  );
}

ClassroomButton.propTypes = {
  userid: PropTypes.string,
  refreshCache: PropTypes.func,
  classroomName: PropTypes.string,
  classroomObj: PropTypes.object,
  buildingName: PropTypes.string,
  router: PropTypes.object
};
  
