import { useState, useEffect } from 'react';
import logo from './logo.svg';

import { Modal } from './catdetails';

 // ================\/============\/==================================
  const { faker } = require('@faker-js/faker');

  const randName = faker.name.firstName();
  const randPrice = faker.commerce.price();
  const randLoc = faker.address.cityName();
  const randBreed = faker.animal.cat();
  const randAbout = faker.lorem.paragraph();
  //=====================^^^^^^^^^=============================

function App() {

  const [catImageStr, setCatImageStr] = useState("");
  const [catImageData, setCatImageData] = useState(null);

  //===================\/========\/====================
  const [cats, setCats] = useState([])

  const [selectedCat, setSelectedCat] = useState(null);
//=======================^^^^^^^^====================

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

      const str1 = catImageData.url;
      setCatImageStr(str1);
    } catch (error) {
      console.log ("Error: ", error);
    }
  }

  useEffect(() => {
    collectCat()
  }, []);
//========================\/=========\/==================
      //faker const's required after div. Modal fakers in func & catdetail modal
  return (
    <div>
      <p>Name: {randName}</p>
      <p>Cost £{randPrice}</p>
      {
        selectedCat ? <Modal price={randPrice} location={randLoc} breed={randBreed} about={randAbout} url={catImageData.url
      }
      onCloseClick={ () => setSelectedCat(null) } /> : null
      }
      <h1>
        CatNet
      </h1>
      {
        catImageStr ?
          <img src = {catImageStr}></img> :
          <p>No cat image string yet</p>
      }
      <button onClick={collectCat}>Cat Button</button>
      <button onClick={() => setSelectedCat(catImageData)}>Detail</button>
    </div>
  );
}

export default App;