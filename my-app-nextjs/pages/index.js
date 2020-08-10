import React from "react";
import "../Resources/style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }
  tick() {
    this.setState(() => {
      return {
        time: new Date().toLocaleTimeString(),
      };
    });
  }
  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <h1>Time: {this.state.time}</h1>
      </div>
    );
  }
}
export default App;
