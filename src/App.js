// App.js
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const handler = async () => {
    const res = await fetch("/api", {
      method: "POST",
    });
    console.log(res);
    setData(res);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <button onClick={handler}>notion get</button>
    </div>
  );
}

export default App;
