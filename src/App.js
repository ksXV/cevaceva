import { connect } from "react-redux";
import "./App.css";
import {
  decrementNumber,
  incrementNumber,
} from "./redux/number/number.actions";
function App({ number, dispatch }) {
  return (
    <div className="App">
      <button
        style={{
          padding: "1em 2em",
          backgroundColor: "#FF00FF",
          border: "1px solid white",
          cursor: "pointer",
        }}
        onClick={() => dispatch(incrementNumber(number))}
      >
        Increment
      </button>
      <h1>{number}</h1>
      <button
        style={{
          padding: "1em 2em",
          backgroundColor: "#FF00FF",
          border: "1px solid white",
          cursor: "pointer",
        }}
        onClick={() => dispatch(decrementNumber(number))}
      >
        Decrement
      </button>
    </div>
  );
}

const mapStateToProps = ({ number }) => ({
  number,
});
export default connect(mapStateToProps)(App);
