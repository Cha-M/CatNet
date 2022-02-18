import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import Footer from './Components/footer';
import Header from './Components/Header';
import Basket from './Components/Basket'
import Modal from 'react-modal';
import { ModalD } from './catdetails';
import NavBar from './Components/NavBar/index';



// import './App.css';




function App() {
  let basketTotal = 0;
  const [cats, updateCats] = useState([]);
  const [basket, updateBasket] = useState([]);
  const [basketModal, updateBasketModal] = useState(false);

  {/*============cat selection for ModalD=======================}*/}
  const [selectedCat, setSelectedCat] = useState(null);


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
      catsArray.push({
        img: cat.url, 
        name:faker.name.firstName(), 
        price:faker.commerce.price(),
/*========================cat ModalD fakers=======================}*/
        location:faker.address.cityName(),
        breed:faker.animal.cat(),
        about:faker.lorem.paragraph()
      }) 
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
        {/* <button onClick={basketModalHandler}>Basket</button> */}
        <a class="cart" onClick={basketModalHandler}><svg className="svg" xmlns="http://www.w3.org/2000/svg" width="5vh" height="5vh" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg></a>
      </div>

      
        <NavBar />
      

      <div className='basket-container'>
      
        {/* RENDER MODAL BASKET WHEN CLICKED */}
        <Modal style={custom} isOpen={basketModal}>
          <div className='basket-contents'>
            <div className='basket-header'>
              <button id='close-basket' onClick={basketModalHandler}>x</button>
              <h2 className='basket-title'>Your Basket</h2>
              <p>Basket total: £{basketTotal}.00</p>
            </div>
            
            <div className = "basket-items">
              
              {basket.map( (item, index) => {
                return (
                  <div key={index} className='item'>
                    <p>{item.name}</p>
                    <p>£{item.price}</p>
                    <button onClick={() => removeFromBasket(index)} className='remove'>-</button>
                  </div>
                )
              })}
            </div>


          </div>
        </Modal>
        

      </div>
{/*============Selected cat ModalD detail and offclick close=========\/============\/===============================}*/}
      <div>
      {
        selectedCat ? (
           <ModalD 
            cat={selectedCat}
            onCloseClick={ () => setSelectedCat(null) } /> 
          ) : null
      }
      </div>
  

      {/* RENDER CAT DISPLAY */}
      
      <div className='cat-container'>
        {cats.map( (kitty,index) => {
          return (
            <div className="cat" key={index}>
              <img src={kitty.img}></img>
              <div className="cat-info">

                <p> {kitty.name} | £{kitty.price} </p>
                {/* <p onClick={() => addToBasket(kitty)}>[+]</p> */}
{/*============Cat detail button ==========\/====================\/=============================}*/}

                {/* <button onClick={() => setSelectedCat(kitty)}>Detail</button> */}

                {/* <p className="name-and-price"> {kitty.name} | £{kitty.price}  </p> */}
                <p className="add-cat-button" onClick={() => addToBasket(kitty)}>🐾</p>
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