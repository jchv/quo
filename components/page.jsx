import React from "react";
import { Block, Inline, Flex, Row, Col } from "jsxstyle";
import Status from "./status";

export default class Page extends React.Component {
  render() {
    const status = {
      status: "offline",
      components: [
        {"name": "Site", "status": "operational"},
        {"name": "API", "status": "degraded"},
        {"name": "CI", "status": "operational"},
        {"name": "Amazon Web Services", "status": "operational"},
        {"name": "GitHub", "status": "offline"},
      ]
    }
    return (
      <Block className="container">
        <h1>Status Page</h1>
        <Block height="3rem" />
        <Status {...status}></Status>
      </Block>
    );
  }
}
