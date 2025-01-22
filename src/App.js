import './App.css';
import DownloadApp from './Pages/DownloadApp/DownloadApp.jsx';
import Footer from './Pages/Footer/Footer.jsx'
import FAQs from "./Pages/Faq.jsx"
import { Outlet } from "react-router-dom"
import { CssBaseline } from "@mui/material";


function App() {
  return (
    <div className="App">
      <CssBaseline/>
    <Outlet/> 
      <FAQs/>
     <DownloadApp/>
     <Footer/>
    </div>
  );
}

export default App;
