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
  const userid = props.userid;

  const updateInteraction = async(userid) =>{

    await axios.post(`${API}/classroom`,
      {
        userid: userid,
        classroom: classroomObj
      });
    props.refreshCache(userid);
  };

  const handleClassroomClick = (classroomName) =>{
    updateInteraction(userid);

    //TODO: router.goto(`#/classroom/${classroomName}`);
  };
  
  return (
    <Button onClick={()=>handleClassroomClick(classroomName)} className={classroomStyles.classroomButton}>{classroomName}</Button>
  );
}

ClassroomButton.propTypes = {
  userid: PropTypes.string,
  refreshCache: PropTypes.func,
  classroomName: PropTypes.string,
  classroomObj: PropTypes.object
};
  
