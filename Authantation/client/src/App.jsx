import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Registration from "./pages/Registraction";
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = ()=>{

    return(

        <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="registration" element={<Registration/>}/>
            <Route path="login" element={<Login/>}/>
           </Route>
          </Routes>
        </BrowserRouter>
         
        </>
    )
}

export default App;