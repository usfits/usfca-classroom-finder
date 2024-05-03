import React from "react";
import PropTypes from "prop-types";
import recentStyles from "../css/recent-styles.css";
import classroomStyles from "../css/classroom-styles.css";
import ClassroomButton from "./classroom-button";

export default function RecentSearch(props) {
  const recent = props?.recent;
  
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
        {recent && recent.length === 0
        && (
          <h1>No Recent Search Found</h1>
        )

        }
        {
          recent && recent.map((classroom, index) => (<ClassroomButton key={index} classroomObj={classroom} classroomName={classroom.room} {...props} />)) 
        }
      </div>
    </div>
  );
}

RecentSearch.propTypes = {
  ctx: PropTypes.object,
  masterData: PropTypes.array,
  userid: PropTypes.string,
  recent: PropTypes.array
};
