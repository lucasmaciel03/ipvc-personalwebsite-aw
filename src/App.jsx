import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutme from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Home from "./pages/Home"
import Weatherapp from "./pages/Projects/Weather/"
import Todoapp from "./pages/Projects/To-do-app/"

function App() {
    return(
        <div className="App">
            <Navbar />
            <Routes>    
                <Route path="/" element={<Home />}></Route> 
                <Route path="/" element={<Aboutme />}></Route> 
                <Route path="/" element={<Projects />}></Route> 
                <Route path="/weatherapp" element={<Weatherapp />}></Route> 
                <Route path="/todoapp" element={<Todoapp />}></Route> 
            </Routes>
            {/* <Footer/> */}
        </div>
    );
}

export default App;