import React from "react";
import PropTypes from "prop-types";
import {
  BasicSegment,
  Button,
  Page
} from "@ombiel/aek-lib";
import buildingStyles from "../css/building-styles.css";
import commonStyles from "../css/common-styles.css";
import HomePageButton from "./home-page-button";
import ClosedFaceSvg from "./closed-face-emoji";

export default function NoResultsFound(props) {
  const searchKeyword = props.ctx.params.keyword;
  
  return (
    <Page>
      <BasicSegment>
        <div className={commonStyles.textCenter}>
          <h3>Nothing found for {searchKeyword}</h3>
          <ClosedFaceSvg />
          <p>
            Directions are currently only available to the primary classrooms for the main campus at USF.
            If a classroom is missing, please let us know by pressing the button below.
          </p>
          <Button className={buildingStyles.buildingButton}>Request Missing Classroom</Button>
          <br /><br />
          <HomePageButton />
        </div>
      </BasicSegment>
    </Page>
  );
}

NoResultsFound.propTypes = {
  ctx: PropTypes.object,
};
