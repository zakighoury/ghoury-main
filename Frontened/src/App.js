import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./ui/HF Combine/MainLayout";
import Main from "./ui/Index/Main";
import Shop from "./user/Services/shop";
import Mart from "./ui/Index/Index_Pages/mart";
import Fashion from "./ui/Index/Index_Pages/fashion";
import Beauty from "./ui/Index/Index_Pages/beauty";
import Home_Decor from "./ui/Index/Index_Pages/home_decor";
import HomeApp from "./ui/Index/Index_Pages/homeapp";
import Free_Delivery from "./ui/Index/Index_Pages/free_delivery";
import { useState } from "react";
import Login from "./user/Services/login"
import Signup from "./user/Services/signup"
import Data from "./user/Services/userdata"

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:5000/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);
  return (
    <>
    {/* <h1>{message}</h1> */}
      <Router>
        <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Signup />}/>
            <Route path="/main" element={<Main />} />
            {/* <Route path="main" element={<Main />} /> */}
            <Route path="/data" element={<Data />} />
            {/* <Route path="middle" element={<Middle />} /> */}
            {/* <Route path="card" element={<Card />} /> */}
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>

          <Route path="/shop" element={<Shop />}/>
          <Route path="/mart" element={<Mart />}/>
          <Route path="/fashion" element={<Fashion />}/>
          <Route path="/beauty" element={<Beauty />}/>
          <Route path="/home" element={<Home_Decor />}/>
          <Route path="/homeapp" element={<HomeApp />}/>
          <Route path="/free_delivery" element={<Free_Delivery />}/>
          
          </Route>
        </Routes>
      </Router>

   
     
      </>
      
  );
}

export default App;
