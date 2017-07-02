import React from "react";
import { Block, Inline, Flex, Row, Col } from "jsxstyle";

export default class StatusRow extends React.PureComponent {
  renderName() {
    return <Block flexGrow="1" fontWeight="700">{this.props.name}</Block>;
  }

  render() {
    let statusTextClass = "text-muted";
    let statusText = "Unknown";
    let statusClass = "list-group-item";

    switch(this.props.status) {
    case "operational":
      statusTextClass = "text-success";
      statusText = "Operational";
      break;

    case "degraded":
      statusTextClass = "text-warning";
      statusText = "Degraded";
      statusClass = "list-group-item list-group-item-warning";
      break;

    case "offline":
      statusTextClass = "text-danger";
      statusText = "Offline";
      statusClass = "list-group-item list-group-item-danger";
      break;
    }

    return (
      <Row className={statusClass}>
        {this.renderName()}
        <Block className={statusTextClass}>
          {statusText}
        </Block>
      </Row>
    );
  }
}
