import React from "react"
// hooks and funcs need to go in root component
// add funcs to cat item buttons
// const [basketItems, setBasketItems] = useState([]);


// const addItem = () =>{

// }
// const removeItem = () => {

// }
///////////////////////////////////////////////////////

const Basket = (props) =>{
    const {basketItems} = props;
    return(
        <div className = "basket">
            <h2>Your Basket</h2>
            <div className = "item">{basketItems.length === 0 && <p>Basket Is Empty</p>}</div>
            {basketItems.map( (item, index) =>(
                <div key = {index}>
                    {item}
                    <button>delete item</button>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>
                
            ))}
        </div>
    )
}

export default Basket;
