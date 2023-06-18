import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";

class App extends React.Component {
  state = { details: [] };

  componentDidMount() {
    let data;
    axios
      .get("http://localhost:8000")
      .then((res) => {
        data = res.data;
        this.setState({ details: data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Django Data</h1>
          <div>
            {this.state.details.map((detail, id) => (
              <div key={id}>
                <h2>{detail.employee}</h2>
                <h3>{detail.department}</h3>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
