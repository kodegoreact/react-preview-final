import ProductShow from "./ProductShow";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";





const Home = () => {
    let [products, setProducts] = useState([]);
    let [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        let getProducts = async () => {
            let list = await fetch("https://kodegoreact.github.io/react-lessons-assets/products.json");
            let info = await list.json();
            
            setProducts(info);
            setAllProducts(info);
        }
    
        getProducts();
    }, []);
    
    let productFilter = (type) => {
    
        if(type === "All"){
            setProducts(allProducts);
        }else{
            let newProducts = allProducts.filter((product) => product.classification === type);
            setProducts(newProducts);
        }
    }
    return ( 
    <>
    <div className="bg-dark text-light py-5">
        <Container>
          <div className="d-flex w-100 justify-content-between">
            <h1>Products</h1>
            <div>
              <button className="btn btn-warning me-2" onClick={() => productFilter("All")}>All</button>
              <button className="btn btn-warning me-2" onClick={() => productFilter("wallet")}>Wallet</button>
              <button className="btn btn-warning me-2" onClick={() => productFilter("bag")}>Bags</button>
              <button className="btn btn-warning me-2" onClick={() => productFilter("shoes")}>Shoes</button>
            </div>
          </div>
          
          <ProductShow products={products}></ProductShow>
        </Container>
      </div>
    
    </> );
}
 
export default Home;