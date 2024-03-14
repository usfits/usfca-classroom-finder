import React, { useState } from "react";
import {
  request
} from "@ombiel/aek-lib";
import axios from "axios";
import recentStyles from "../css/recent-styles.css";
import classroomStyles from "../css/classroom-styles.css";
import ClassroomButton from "./classroom-button";
import { API } from "../constants";

export default function RecentSearch(props) {
  const [recent, setRecent] = useState(null);
  
  const fetchRecentInteraction = async (username)=>{
    const response = await axios.get(`${API}/classroom`, {params: { userid: username }});
    setRecent(response.data.classrooms);
  };
  request
  .action("get-user", { sso: true })
  .then((response) => {
    fetchRecentInteraction(response.body.username);
  });
  
  return (
    <div className={classroomStyles.classroomListDiv}>
      <div className={classroomStyles.classroomList}>
        {!recent 
        && (
          <div>
            <div className={recentStyles.mainItem}>
              <div className={recentStyles.animatedBackground}>
                <div className={recentStyles.backgroundMasker}></div>
              </div>
            </div>
            <div className={recentStyles.mainItem}>
              <div className={recentStyles.animatedBackground}>
                <div className={recentStyles.backgroundMasker}></div>
              </div>
            </div>
          </div>
        )
        }
        {
          recent && recent.map((classroom, index) => (<ClassroomButton key={index} classroomObj={classroom} classroomName={classroom.room} {...props} />)) 
        }
      </div>
    </div>
  );
}
