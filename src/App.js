import { useState, useEffect } from 'react';
import logo from './logo.svg';


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
      const catAPILink = "https://api.thecatapi.com/v1/images/search";
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

  return (
    <div>
      <h1>
        CatNet
      </h1>
      <img src = {catImageStr}></img>
    </div>
  );
}

export default App;