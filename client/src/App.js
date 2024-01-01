import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:4000/getMessage", {
      method: "POST",
      body: JSON.stringify({
        question: "How is the weather in poland",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((res) => console.log(res));
  }, []);
  return <main>Hello</main>;
}

export default App;
