import logo from "./logo.svg";
import "./App.css";
//import Child from "./child/child";
import { lazy, Suspense } from "react";
import { Child1, ThemeContext } from "./child1/child1";
import { Route, Router, Routes, Link } from "react-router-dom";
const Child = lazy(() => import("./container/counterContainer"));
function App() {
  const list = [{ id: 1 }, { id: 2 }];
  return (
    <div className="App">
      {list.map((item) => (
        <>
          <Link to={`/home/${item.id}`} element={<Child />}>
            Home {item.id}
          </Link>
          <br />
        </>
      ))}
      <Suspense fallback={<div style={{ color: "red" }}>Loading...</div>}>
        <Routes>
          <Route path="/home/:id" element={<Child />}>
            HOme
          </Route>
        </Routes>
      </Suspense>
      {/* <Child1 /> */}

      {/* <Child name="Child" id="1" />
      <ThemeContext.Consumer>
        {(value) => {
          return <h1 style={{ color: value }}>Hello</h1>;
        }}
      </ThemeContext.Consumer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

//Routing--Done
//Forms --
//Context -- Done
//store example--
//backend api-- How to make An api call in the React app. -- Done
//UseEffect -- done
