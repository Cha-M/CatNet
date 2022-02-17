import { useState, useEffect } from 'react';
import './index.css';
import { render } from '@testing-library/react';
import Footer from './components/footer'


// const collect = async () => {
//   try {
//     // const response = await fetch("https://api.adviceslip.com/advice");
//     const randID = Math.floor(Math.random() * 60000);
//     console.log("n", randID);
//     const apiStr = "http://gutendex.com/books/" + randID + "?limit=10";
//     // const response = await fetch("http://gutendex.com/books/84");
//     const response = await fetch(apiStr);


function App() {

  const [catImageStr, setCatImageStr] = useState("");
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

  const CatCloner = () => {
    // let arrayCats = Array(40);
    // for (let x of arrayCats) {
      //   x = "Fluffy";
      // }
    let arrayCats = ["Fluffy", "Fluffy", "Felix", "Fluffy", "Fluffy", "Felix", "Fluffy", "Felix", "Felix", "Felix", "Fluffy"];
    const mapCats = arrayCats.map( (item, index) => <div className='flex4'>Name: {item}, {index} (flex4)</div>);
    console.log("arrayCats", arrayCats, "mapCats", mapCats);
    return ( <> <div className='flex3'>Container for cats from CatCloner function (flex3): {mapCats}</div></> )
    };

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
      
      <Footer/>
    </div>
  );
}

export default App;