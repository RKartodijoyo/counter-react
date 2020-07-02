import React, { PureComponent } from "react";
import { connect } from "react-redux";
import "./styles.css";
import { incrementAction, decreaseAction } from "./actions";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
class Page extends PureComponent {
  render() {
    const { value, incrementAction, decreaseAction } = this.props;
    return (
      <div style={styles}>
        <h1>{value}</h1>
        <button class="block" onClick={incrementAction}>
          Add
        </button>
        <button class="block" onClick={decreaseAction}>
          Substract
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.value
});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch(incrementAction()),
  decreaseAction: () => dispatch(decreaseAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
