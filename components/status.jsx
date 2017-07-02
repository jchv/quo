import React from "react";
import StatusRow from "./status-row";
import StatusSummary from "./status-summary";

export default class Status extends React.PureComponent {
  renderSummary() {
    return <StatusSummary status={this.props.status} />
  }

  renderRows() {
    return this.props.components.map((value) => {
      return <StatusRow key={value.name} {...value}></StatusRow>
    })
  }

  render() {
    return (
      <div id="status">
        <ul className="list-group">
          {this.renderSummary()}
        </ul>
        <h6>Components</h6>
        <ul className="list-group">
          {this.renderRows()}
        </ul>
      </div>
    );
  }
}
