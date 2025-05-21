import React, { Component } from "react";

class Panel extends Component {
  render() {
  	const { label, value, onSelect } = this.props;
		return (
      <section
      	className="dashoboard__panel" 
				onClick={onSelect}
      >
				<h1 className="dashboard__panel-header">{label}</h1>
				<h1 className="dashboard__panel-value">{value}</h1>
      </section>
    );
  }
}

export default Panel;
