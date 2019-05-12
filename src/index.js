import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  //Initializing the app state with two values
  state = {
    items: [],
    isLoaded: false
  };

  //Using Component did mount function, happens when component is rendered, doesnt need to be called
  componentDidMount = () => {
    //Fetch something from this source
    fetch("https://jsonplaceholder.typicode.com/users")
      //Then convert it to json format
      .then(res => res.json())
      //Then take that json and use it to set the state of items, while also changing the value of is loaded to true
      .then(json => {
        this.setState({ isLoaded: true, items: json });
      });
  };

  render() {
    //This allows you to access items and isLoaded without calling this.state
    var { items, isLoaded } = this.state;

    //If isLoaded is false then return a div that says ...Loading
    if (isLoaded === false) {
      return <div>...Loading</div>;
    } //Else just say data is loaded, and use map to print out the names of each person in the new array
    else {
      return (
        <div>
          Name{" "}
          {items.map(item => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
