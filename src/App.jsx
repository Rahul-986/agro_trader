import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Layout from "./components/Layout";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import  "./App.css";
import LocomotiveScroll from 'locomotive-scroll';


const App=()=>{
  const scroll = new LocomotiveScroll();
  
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact/>}/>
    
      </Route>

    </Routes>
    
    </BrowserRouter>
    </>
  )
};
export default App;
