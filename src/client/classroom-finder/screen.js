import React from "react";
import {
  BannerHeader,
  Panel,
  HBox,
  AekReactRouter,
  RouterView,
  VBox
} from "@ombiel/aek-lib";

import styles from "./css/screen-styles.css";

import HomePage from "./components/home-page";
import NoResultsFound from "./components/no-results-found";
import ClassrooomList from "./components/classroom-list";
import SearchResults from "./components/search-results";

const router = new AekReactRouter({useHash: false});


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
              <RouterView router={router}>
                <HomePage path="/" {...{router}} />
                <SearchResults path="/search/:keyword" {...{router}} />
                <NoResultsFound path="/search/no-results/:keyword" {...{router}} />
                <ClassrooomList path="/classroom/:building" {...{router}} />
              </RouterView>
            </HBox>
          </Panel>
          
        </VBox>
      </Panel>
    );

  }

}
