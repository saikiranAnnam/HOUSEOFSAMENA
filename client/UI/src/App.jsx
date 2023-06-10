import { 
  createBrowserRouter,
  RouterProvider, 
  Outlet
} from "react-router-dom";
import Home from "./pages/Home/Home"
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import './App.scss';


// create a layout for the website
const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/> 
      <Footer/> 
    </div>
  )
}

// block describes different of page routes are present
const router = createBrowserRouter([

  // home page
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },// different categories page
      {
        path : "/products/:id",
        element : <Products/>
      },
      // single product page
      {
        path : "/product/:id",
        element : <Product/>
      },
    ]
    }
])



function App() {
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
