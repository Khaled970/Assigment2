import {useState} from "react";
function App(){
    const [yourName] = useState("Khalil");
    return <h1>Hello {yourName}</h1>;
}
export default App;