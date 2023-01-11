import { useState } from "react";
import Form from "./components/JobForm";
import Jobs from "./components/Jobs";
import reactLogo from "./assets/react.svg";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1 className="text-red-500">Hola</h1>
            <Form />
            <Jobs />
        </div>
    );
}

export default App;
