import React, { Component } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import withCounter from "../../HOC/withCounter";

class ButtonCounter extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   count: 0,
    // };
  }

  render() {
    return (
      <>
        {this.props.count}
        <br />
        <PrimaryButton
          btnName="Increment"
          // onBtnClick={() => this.setState({ count: this.state.count + 1 })}
          onBtnClick={this.props.increase}
        />
        <PrimaryButton btnName="Decrement" onBtnClick={this.props.decrease} />
      </>
    );
  }
}

export default withCounter(ButtonCounter);
