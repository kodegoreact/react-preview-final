import NavigationBar from "./components/NavigationBar";
import Banner from "./components/Banner";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import Footer from "./components/Footer";

import { BrowserRouter,Routes, Route} from "react-router-dom";



function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar></NavigationBar>
        <Banner></Banner>
        <div className="bg-dark text-light py-5">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/product" element={<CreateProduct></CreateProduct>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
