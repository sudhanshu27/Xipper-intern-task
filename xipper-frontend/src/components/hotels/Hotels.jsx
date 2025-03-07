import React from "react";
import { useState, useEffect } from "react";
import { getHotels } from "../../api/db";
import "./Hotels.css";

const Hotels = () => {
 const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels().then((data) => setHotels(data));
  }, []);

  return (
    <div>
      <h2>Available Hotels</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            {hotel.name} - {hotel.location} (Rooms Available:{" "}
            {hotel.roomsAvailable})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
