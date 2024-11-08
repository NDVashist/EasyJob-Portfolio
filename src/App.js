import "./App.css";
import Home from "./pages/Home/Home.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/About/About.js";
import Register from "./pages/Register/Register.js";
import Dashboard from "./pages/Dashboard/Dashboard.js";
import Navbar from "./components/navbar/Navbar.js";
import Footer from "./components/footer/Footer.js";
import Wantjob from "./pages/WantJob/WantJob.js";
import Space from "./components/Space.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <>
         <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: 
      <>
        <Navbar/>
        <AboutUs />,
        <Footer/>
      </>
    },
    {
      path: "/wantHire",
      element:
      <> 
        <Navbar/>
        <Register />,
        <Footer/>
      </>
    },
    {
      path: "/dashboard",
      element: 
      <>
        <Dashboard />,
        
      </>
    },
    {
      path:"/wantjob",
      element:
      <>
        <Navbar/>
        <Wantjob/>
        <Footer/>
      </>
    },
    // {
    //   path:"/register",
    //   element: 
    //   <>
    //     <Navbar/>
    //      <Space height={50}/>
    //      <Register/>
    //     <Footer/>
       
    //   </>
    // }
   
  ],
  { basename: "/EasyJob-Portfolio" }
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Home/> */}
      {/* <Wantjob/> */}
    </div>
  );
}

export default App;

//"homepage": "https://NDVashist.github.io/EasyJob-Portfolio",
