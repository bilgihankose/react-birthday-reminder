import { useState } from "react";
import "./App.css";
import data from "./data";
import List from "./Components/List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <h3>{data.length} birthdays today</h3>
      <List />
      <button>Clear List</button>
    </main>
  );
}

export default App;
