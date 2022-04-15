import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./Components/List";

function App() {
  const [people, setPeople] = useState(data);
  const style = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div style={style}>
      <h3 style={{ margin: "20px" }}>{people.length} birthdays today</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear List</button>
    </div>
  );
}

export default App;
