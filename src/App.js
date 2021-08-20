import { Router } from "./components/Router";
import './App.scss';
import { MyNewContext } from "./context/newContext";

function App() {
    return (
        <MyNewContext.Provider value={{mess: 'Hi there!'}}>
            <Router />
        </MyNewContext.Provider>
    );
}

export default App;