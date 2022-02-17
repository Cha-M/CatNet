import React from "react"
// hooks and funcs need to go in root component
// add buttons to cat items
// const [basketItems, setBasketItems] = useState([]);


// const addItem = () =>{

// }
// const removeItem = () => {

// }
///////////////////////////////////////////////////////

const Basket = (props) =>{
    const {basketItems, addItem, removeItem} = props;
    return(
        <div className = "basket">
            <h2>Your Basket</h2>
            <div className = "item">{basketItems.length === 0 && <p>Basket Is Empty</p>}</div>
            {basketItems.map((item) =>(
                <div key = {cat.id}>
                <p>{cat.name}</p>
                <img src = {item.image} alt = {item.name}/>
                <button onClick ={() => addItem(item)}>+</button>
                <button onClick ={() => removeItem(item)}>-</button>
                </div>
            ))}
        </div>
    )
}

export default Basket;
