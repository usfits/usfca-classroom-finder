import React from "react";
import {
  BannerHeader,
  Panel,
  HBox,
  //   AekReactRouter,
  //   RouterView,
  VBox
} from "@ombiel/aek-lib";

import styles from "./css/screen-styles.css";
import Router from "./router";

// import HomePage from "./components/home-page";
// import NoResultsFound from "./components/no-results-found";
// import ClassrooomList from "./components/classroom-list";
// import SearchResults from "./components/search-results";

// const router = new AekReactRouter({useHash: false});


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
