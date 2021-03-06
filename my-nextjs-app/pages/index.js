import React from "react";
import "../styles.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeState } from "../Actions/actions";
import axios from "axios";
class ReduxDemo extends React.Component {
  static async getInitialProps() {
    try {
      const res = await axios.get("http://localhost:3000/api/TestAPI", {
        data: { query: `{ name, address }` },
      });
      return { data: res.data, error: null };
    } catch (e) {
      return { data: "", error: e };
    }
  }

  static getAPIURL() {
    if (process.env.NODE_ENV === "production") {
      return process.env.URL_TestAPI_Prod;
    } else {
      return process.env.URL_TestAPI_Dev;
    }
  }

  render() {
    return (
      <div>
        <h1>Redux Demo</h1>
        <h1>Hello from {process.env.NODE_ENV} server</h1>
        <br />
        <div className="center">
          <input id="inputTextbox" type="text"></input>
          <button type="button" onClick={this.props.changeState}>
            Update Label
          </button>
        </div>
        <br />
        <p>{this.props.text}</p>
        <h1>Hello, world!</h1>
        <table>
          {Object.keys(this.props.data).map((key, index) => (
            <tr key={index}>
              <td>{key}:</td>
              <td>{this.props.data[key]}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeState: bindActionCreators(changeState, dispatch),
  };
};
export default connect(
  (state) => ({ text: state.text }),
  mapDispatchToProps
)(ReduxDemo);
