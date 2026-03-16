import React from 'react' 
import { useEffect } from 'react';
import {menu} from '../utils/menu'

const RestaurantMenu = () => {

    // useEffect(()=>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async()=>{
    //     const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5485315&lng=77.1264849&restaurantId=837821");
    //     const json = data.json();
    // }

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