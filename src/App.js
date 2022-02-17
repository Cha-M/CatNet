import { useState, useEffect } from 'react';

function App() {

  const [cat, setCat] = useState([]);
  const [basket, setBasket] = useState([]);
  const [error, setError] = useState({
    error: false,
    message: ''
  });

  const collectCats = async () => {
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      const responseData = await response.json();
      setCat(responseData[0]);
      

      if (response.status !== 200) {
        throw new Error("oops");
      }
    } catch (error) {
      setError ({ error: true, message: error.message });
      console.log(error)
    }
  }

  useEffect(()=>{
    collectCats();
  }, [])

  if (cat.length == 0) {
    console.log("waiting for cats...")
  }

  console.log(cat)

  return (
    <div className="body-container">
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="cats-container">
        <GetCats />
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </div>
        
  );
}

const NavBar = () => {
  return (
    <>
      <p>CatNet</p>
      <div className="checkout-button-container">
        <button>Checkout</button>
      </div>
    </>
  )
}

const GetCats = () => {
  return (
    <>
    <div className="row1">
      <div>cat1</div>
      <div>cat2</div>
      <div>cat3</div>
    </div>
    <div className="row2">
      <div>cat1</div>
      <div>cat2</div>
      <div>cat3</div>
    </div>
    <div className="row3">
      <div>cat1</div>
      <div>cat2</div>
      <div>cat3</div>
    </div>
    </>
  )
}

const Footer = () => {
  return (
    <>
    <div className="footer-container">
      <div className="footer-links">
        <ul>
          <li>link1</li>
          <li>link2</li>
          <li>link3</li>
          <li>link4</li>
          <li>link5</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default App;