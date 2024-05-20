import React from "react";
import {
  Panel,
  HBox,
  VBox,
  parseQueryString,
} from "@ombiel/aek-lib";
import Router from "./router";

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: ''
    };
  }

  componentDidMount() {
    try {
      const location = document.body.getAttribute("data-location");
      let query = null;
      if (location !== null && location !== undefined) {
        query = parseQueryString(location).page;
        this.setState({ page: query.toString()});
      }
    }
    catch (e) {
      console.log("Classroom finder : No query parameter found");
    }
  }

  render() {
    const { page } = this.state;
    return (
      <Panel>
        <VBox>
          <Panel>
            <HBox>
              <Router classroomPage={page} />
            </HBox>
          </Panel>
        </VBox>
      </Panel>
    );

  }

}
