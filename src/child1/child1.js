import React from "react";
const ThemeContext = React.createContext("green");

class Child1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }
  setIsShow() {
    this.setState({ isShow: true });
  }
  render() {
    return (
      <>
        {" "}
        <ThemeContext.Provider value={"red"}>
          <ThemeContext.Consumer>
            {(value) => <h3>{value}</h3>}
          </ThemeContext.Consumer>
        </ThemeContext.Provider>
        <div>{this.state.isShow ? "Child1 component" : "Not"}</div>
        <button onClick={() => this.setIsShow()}>isShow</button>
      </>
    );
  }
}

export { Child1, ThemeContext };
