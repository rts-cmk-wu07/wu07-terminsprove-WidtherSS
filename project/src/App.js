import { BrowserRouter,Routes ,Route} from "react-router-dom";
import Home from "./scenes/Home";
import Welcome from "./scenes/Welcome";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/home"  element={<Home/>} />
        </Routes>  
    </BrowserRouter>

  );
};

export default App;
