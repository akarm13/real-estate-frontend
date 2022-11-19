import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex justify-center items-center bg-red-50">
      <h1 className="text-3xl font-bold text-teal-300">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
      </h1>
    </div>
  );
}

export default App;
