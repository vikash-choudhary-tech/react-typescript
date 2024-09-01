import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { counter: state.counter };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

const TestComp = (props) => {
  const { counter, increment, decrement } = props;

  return (
    <>
      <h2>State : {counter}</h2>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComp);
