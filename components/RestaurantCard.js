import React from 'react';
import { CDN_URL } from "../utils/constants";

const RestaurantCard= (props)=>{

   const { details } = props;
   const {name, cuisines, avgRatingString, costForTwo, cloudinaryImageId} = details?.card?.card?.info;
    

    return <div className="restaurant-card">
        <div className="card-details">
            <img className="food-img" src={CDN_URL+cloudinaryImageId }/>
            <h1>{name}</h1>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRatingString}</h4>
            <h3>{costForTwo}</h3>
        </div>

    </div>
}

export default RestaurantCard;