import React from "react";
import { faker } from "@faker-js/faker";
import './catdetails.css'

/*============Faker info for catdetails ModalD================}*/
const location = faker.address.cityName();
const breed = faker.animal.cat();
const about = faker.lorem.paragraph();

export const ModalD = ({onCloseClick, cat}) => (
    <div className="modal-wrapper" onClick={onCloseClick}>
        <div className="modal-content">

            {/* <button style={{alignSelf: 'flex-end', padding: '10px'}} onClick={onCloseClick}>Close X</button> */}
            <img style={{alignSelf: 'center'}} src={cat.img} alt='cat' width={200} height={200} />
            <Item label={'Name'} value={cat.name} />
            <Item label={'Price £:'} value={cat.price} />
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
