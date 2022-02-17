import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import logo from './logo.svg';
import './index.css';
import Footer from './components/footer';
// import Header from './Components/Header';
// import Basket from './components/Basket';


function App() {

  const [basketItems, setBasketItems] = useState([]);
  const [catImageStr, setCatImageStr] = useState("");
  const [catStorage, setCatStorage] = useState([{"catImgURL" : "", "catName" : ""}]);
  const [catImageData, setCatImageData] = useState("");

  // const data = await response.json();
  // // console.log(data);
  // setBook(data);

  const collectCat = async () => {
    try {
      const catAPILink = "https://api.thecatapi.com/v1/images/search/";
      const catResponse = await fetch(catAPILink);
      const data = await catResponse.json();
      setCatImageData(data[0]);

      if (catImageData)
      {
        console.log("catImageData set as ", catImageData);
      }
      else
      {
        console.log("!catImageData");
      }
      // console.log("catIData", catImageData);

      if (catResponse.status !== 200) {
        console.log("error !200");
        console.log(catResponse.status);
        throw new Error("Error");
      } 

      const str1 = await catImageData.url;
      setCatImageStr(str1);

    } catch (error) {
      console.log ("Error: ", error);
    }
  }
  
  const pushCat = async () => {
      try {
        const catAPILink = "https://api.thecatapi.com/v1/images/search/";
        const catResponse = await fetch(catAPILink);
        const data = await catResponse.json();
        setCatImageData(data[0]);
        
        if (catImageData)
        {
          console.log("catImageData set as ", catImageData);
        }
        else
        {
          console.log("!catImageData");
        }
        // console.log("catIData", catImageData);
        
        if (catResponse.status !== 200) {
          console.log("error !200");
          console.log(catResponse.status);
          throw new Error("Error");
        } 
        
        const str1 = await catImageData.url;
        const str2 = `${faker.name.firstName()}`;
        // setCatImageStr(str1);
        let catStorageLocal = catStorage;
        catStorageLocal.push({catImgURL : str1, catName : `${str2}`});

        setCatStorage(catStorageLocal);
        console.log("catStorage", catStorage);

      } catch (error) {
        console.log ("Error: ", error);
      }
    
  }

  // const arrayList = (props) => {
  //   const items = props;
  //   // const listItemsInner;
  //   const listItems = items.map((item, index) =>
  //     <li key={index.toString()}>{item}</li>
  //     // <ul>{() => item.map((it1, in1)) => <li>it1</li>}</ul></li>
  
  //   )
  
  //   return (
  //     <ul>{listItems}</ul>
  //   )
  // }

  const CatCloner = (props) => {
    // let arrayCats = Array(40);
    // for (let x of arrayCats) {
      //   x = "Fluffy";
      // }
    
    // const arrayCats = props.array;

    // let arrayCats = [{"catImgURL" : "abcd", "catName" : "efgh"}, {"catImgURL" : "abcd", "catName" : "efgh"}];
    let arrayCats = catStorage;
      if (arrayCats) {
        const mapCats = arrayCats.map( (item, index) => <div className='flex4'>Name: {item.catName} <img src = {item.catImgURL}></img>(flex4)</div>);
        console.log("arrayCats", arrayCats, "mapCats", mapCats);
        return ( <> <div className='flex3'>Container for cats from CatCloner function (flex3): {mapCats}</div> </> )
      }
    };

  // Placeholder components
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


  useEffect(() => {
    collectCat()
  }, []);

  return (
    <div>

      <h1>
        CatNet
      </h1>

      {
        catImageStr ?
          <img src = {catImageStr}></img> :
          <p>No cat image string yet</p>

      }


      <div>
        <button onClick={collectCat}>Cat Button</button>
        <button onClick={pushCat}>
          Push Cat
        </button>
      </div>

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

      <div className='flex0'>
        Outer Flex Object (flex0)
        <div className='flex1'>
          Flex title bar (flex1)
        </div>
        <div className='flex2'>
          Rows of cats (flex2) ---
          <CatCloner />
        </div>

        
      </div>
      {/* <Basket/> */}
      
      <Footer/>
    </div>
  );
}

export default App;