import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Footer from './components/footer';
import Header from './components/Header';
import Basket from './components/Basket'
import Modal from 'react-modal';
// import './App.css';

function App() {
  let basketTotal = 0;
  const [cats, updateCats] = useState([]);
  const [basket, updateBasket] = useState([]);
  const [basketModal, updateBasketModal] = useState(false);


  // Fetch a batch of cat img urls
  // Push them into storage
  const getCats = async() => {
    // Wait for response from cat API --
    // Fetching 16 cats
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=16");
    // Wait to JSONify it
    const data = await response.json();
    // Create a spread array for our current collection of cats
    const catsArray = [...cats];
    // Map our JSONified fetched cats into our new cat array, each cat is an object with an img url,
    // a fake name, and a fake price
    data.map((cat, index) => {
      catsArray.push({img: cat.url, name:faker.name.firstName(), price:faker.commerce.price()})
    })
    // We set our state hook equal to our new array of cat objects
    updateCats(catsArray)
  }

  // All basket handling functions stay in the root node for now
  // External components seem complicated

  // This is a simple add to list function, like our to do list
  const addToBasket = (x) => {
    let myBasket = [...basket];
    myBasket.push(x);
    updateBasket(myBasket);
  }

  // We remove in the same way
  const removeFromBasket = (index) => {
    let myBasket = [...basket];
    myBasket.splice(index, 1);
    updateBasket(myBasket);
  }

  // This will update the running total of cats in the basket array
  basket.map((item) => {
    basketTotal+=parseInt(item.price)
  })
  
  // Now this part is all for the basket pop-up provided by
  // 'react-modal' -- I don't fully understand it, but it works :^)

  // This will set our Modal state to true/false
  const basketModalHandler = () => {
    if (!basketModal) {
      updateBasketModal(true)
    } else {
      updateBasketModal(false)
    }
  }

  // This is th container for our modal pop-up basket
  // We basically just create a new div
  const modalContainer = document.createElement('div');
  // We append it to the DOM, only when our modal state is TRUE
  document.body.appendChild(modalContainer)

  // Modal components have a 'style' attribute that uses objects
  // Good for general layout, but more specific styling of elements within
  // should be done using CSS and class names etc.
  const custom = {
    content : {
      marginLeft: '25%',
      width: '50%'
    }
  }

  // This is to fetch and generate our cats on page load, only once!
  useEffect(()=>{
    getCats();
  }, [])


  // This is everything that is to be rendered
  // Header and Footer components are simple enough that we
  // can simply reference an external jsx file
  return (
    <>
      {/* RENDER HEADER NAV BAR */}
      <div className="header-container">
        <Header />
        <button onClick={basketModalHandler}>Basket</button>
      </div>

      <div className='basket-container'>
      
        {/* RENDER MODAL BASKET WHEN CLICKED */}
        <Modal style={custom} isOpen={basketModal}>
          <div className='basket-contents'>
            <button id='close-basket' onClick={basketModalHandler}>x</button>
            <h2>Your Basket</h2>
            <div className = "basket-items">
              
              {basket.map( (item, index) => {
                return (
                  <div key={index} className='item'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <button onClick={() => removeFromBasket(index)}>remove</button>
                  </div>
                )
              })}
            </div>
            <div className='total'>
              <p>Basket total: £{basketTotal}.00</p>
            </div>

          </div>
        </Modal>
        
      
      </div>
  

      {/* RENDER CAT DISPLAY */}
      
      <div className='cat-container'>
        {cats.map( (kitty,index) => {
          return (
            <div className="cat" key={index}>
              <img src={kitty.img}></img>
              <div className="cat-info">
                <p> {kitty.name} | £{kitty.price} </p>
                <p onClick={() => addToBasket(kitty)}>[+]</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default App;