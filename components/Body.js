import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  

    useEffect(()=>{
        fetchData();
    },[]);

  const fetchData = async() =>{
    try {
      const data = await fetch("https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5485315&lng=77.1264849&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");

      const json = await data.json();

      setRestaurants(json?.data?.cards.slice(3, ));
      setFilteredRestaurants(json?.data?.cards.slice(3, 10));
    } catch (error) {
      console.error("Error fetching data:", error);
      // Optionally set some fallback data or show an error message
    }
  }

  const topRated = () => {
    const filteredCards = restaurants.filter((res) => {
      return res?.card?.card?.info?.avgRating > 4;
    });
    setFilteredRestaurants(filteredCards);
  };


  return (
    <div className="body">
      <div>
        <input value={searchInput} 
        onChange={(e)=>setSearchInput(e.target.value)}>
        </input>
        <button
        onClick={()=>{
            // console.log(restaurants);
            const filteredList = 
            restaurants.filter((res)=> 
                res?.card?.card?.info?.name.toLowerCase().includes(searchInput.toLowerCase()));

            setFilteredRestaurants(filteredList);
        }}
        >Search</button>
        <button
          className="filter-button"
          onClick={topRated}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurants.map((restaurants) => (
          <RestaurantCard
            key={restaurants?.card?.card?.info?.id}
            details={restaurants}
          />
        ))}

        {/* <RestaurantCard details={cards[0]}/>
        <RestaurantCard details={cards[1]}/>
        <RestaurantCard details={cards[2]}/>
        <RestaurantCard details={cards[3]}/> */}
      </div>
    </div>
  );
};

export default Body;
