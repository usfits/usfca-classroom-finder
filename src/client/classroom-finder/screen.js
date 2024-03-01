import React from "react";
import {
  BannerHeader,
  Panel,
  HBox,
  VBox
} from "@ombiel/aek-lib";

import styles from "./css/screen-styles.css";
import Router from "./router";


export default class Screen extends React.Component {

  componentDidMount() {

  }

  render() {

    return (
      <Panel>
        <VBox>
          <BannerHeader key="header" className={styles.screenTitle} data-flex={0}>Classroom Finder</BannerHeader>
          <Panel>
            <HBox>
              <Router />
            </HBox>
          </Panel>
        </VBox>
      </Panel>
    );

  }

}
