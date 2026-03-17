import React from 'react' 
import { useEffect } from 'react';
import {menu} from '../utils/menu'

const RestaurantMenu = () => {


const {name, cuisines,costForTwoMessage} = menu.data.cards[2].card.card.info;
const {itemCards} = menu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  return (<>
    <h1>{name}</h1> 
    <h3>{cuisines.join(",")}</h3>
    <h2>{costForTwoMessage}</h2>
    <h2>Menu</h2>
    <ul>
        {itemCards.map((item)=>{
        return <li key={item.card.info.id}><p>{item.card.info.name} - <b>Rs.{item.card.info.defaultPrice }</b></p> </li>
    })}
    </ul>

    

  </>)
}

export default RestaurantMenu;