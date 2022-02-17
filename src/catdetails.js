import React from "react";

import './catdetails.css'

export const Modal = ({url, price, location, breed, about, onCloseClick}) => (
    <div className="modal-wrapper" onClick={onCloseClick}>
        <div className="modal-content">
            {/* <button style={{alignSelf: 'flex-end', padding: '10px'}} onClick={onCloseClick}>Close X</button> */}
            <img style={{alignSelf: 'center'}} src={url} alt='cat' width={200} height={200} />
            {/* <Item label={'Name'} value={name} /> */}
            <Item label={'Price £:'} value={price} />
            <Item label={'Location:'} value={location} />
            <Item label={'Breed:'} value={breed} />
            <Item label={'About:'} value={about} />
        </div>
    </div>
)

const Item = ({label, value}) => (
    <div style={{display: 'flex'}}>
        <h3 style={{marginRight: '10px', color: "grey"}}>{label}</h3>
        <p>{value}</p>
    </div>
)
