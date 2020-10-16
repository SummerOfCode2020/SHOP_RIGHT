import React, {useState} from 'react';
import './App.css';
const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);
  const [products] = 
  useState([{
      name: 'NIKE 1',
      price: '$300',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu0yWKHrjs6j2qsKXchSellzk33BTWBnpw3A&usqp=CAU',
    },
    { name: 'NIKE 2',
      price: '$350',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4xwa6Ws58JcnL-YuookyygCbguTo_zhS29Q&usqp=CAU'
    },
    { name: 'PUMA',
      price: '$150',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRY8zLNJ0hyfHUkdOLbxX8PFAQJL7bYnZPbgA&usqp=CAU'
    },
    { name: 'SOCKS',
      price: '$40',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3t3rteu5p4B5lPGlvC5uOuanjAJwNgqKV-JG5Z-yUC3zYGClkbuumIlgFdo4Vim3f1mVVEuo&usqp=CAc'
    },
    
    ]);
    const addToCart = (product) => {setCart ([...cart, { ...product}]);};
    
    const deleteFromCart = (productToRemove) => { setCart(cart.filter(product => product !== productToRemove ))};

    const navigateTo = (nextPage) => { setPage(nextPage);};
  
    const renderProduct = () => (
      <>
      <h1> <button>PRODUCT</button> </h1>
      <div className= "products"> 
      {products.map((product, idx) => (
        <div className ="product" key ={idx}> 
          <h3> {product.name} </h3>
          <h4> {product.price} </h4>
          <img src = {product.img} alt ={ product.name}/>
          <button onClick ={() => addToCart(product)}> ADD TO CART</button>
        </div>
      ))}
   
      </div>
      </>
    );  
    
    const renderCart = () => (
      <>
      <h1> CART </h1>
      <div className= "products"> 
      {cart.map((product, idx) => (
        <div className ="product" key ={idx}> 
          <h3> {product.name} </h3>
          <h4> {product.price} </h4>
          <img src = {product.img} alt ={ product.name}/>
      <button onClick ={() => deleteFromCart(product)}> DELETE </button>
        </div>
      ))}
   
      </div>
      </>
    );
  
  return (
  <div className="App">
    <header>
  <button onClick={() => navigateTo(PAGE_CART)}>GO TO CART ({cart.length})</button>

  <button onClick={() => navigateTo(PAGE_PRODUCTS)}>VIEW PRODUCTS ({cart.length})</button>
    </header>
    {page === PAGE_PRODUCTS && renderProduct ()}
    {page === PAGE_CART && renderCart ()}
    
    
   </div>);
}
 export default App;

   
    
  
    

