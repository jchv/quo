import React from "react";
import { Block, Inline, Flex, Row, Col } from "jsxstyle";

export default class StatusSummary extends React.PureComponent {
  render() {
    let statusText = "Unknown";
    let statusClass = "list-group-item";

    switch(this.props.status) {
    case "operational":
      statusText = "All Systems Operational"
      statusClass = "list-group-item list-group-item-success";
      break;

    case "degraded":
      statusText = "Degraded Performance"
      statusClass = "list-group-item list-group-item-warning";
      break;

    case "offline":
      statusText = "Major Outage"
      statusClass = "list-group-item list-group-item-danger";
      break;
    }

    return (
      <Row className={statusClass}>
        {statusText}
      </Row>
    );
  }
}
