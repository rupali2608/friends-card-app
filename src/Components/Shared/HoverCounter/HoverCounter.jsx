import React, { Component } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import withCounter from "../../HOC/withCounter";

class HoverCounter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    // };
  }

  render() {
    return (
      <>
        <div
          //   onMouseEnter={() => this.setState({ count: this.state.count + 1 })}
          onMouseEnter={this.props.increase}
          style={{
            width: "200px",
            height: "200px",
            border: "solid 4px black",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.props.count}
        </div>
      </>
    );
  }
}

export default withCounter(HoverCounter);
