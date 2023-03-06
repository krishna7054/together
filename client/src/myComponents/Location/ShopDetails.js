import React, { useState } from 'react';

const ShopDetails = () => {
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const { value } = event.target;
        setLocation(value);

        // Fetch suggestions from an API
        fetch(`https://api.com/location?q=${value}`)
            .then((response) => response.json())
            .then((data) => {
                setSuggestions(data.suggestions);
            });
    };

    return (
        <div>
            <h3>Shop Details</h3>
            <label>
                Location:
                <input
                    type="text"
                    value={location}
                    onChange={handleInputChange}
                />
            </label>
            <ul>
                {suggestions.map((suggestion) => (
                    <li key={suggestion.id}>{suggestion.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ShopDetails;








































// import { Map, TileLayer, Marker } from "react-leaflet";
// import { useState } from "react";
// import { Map } from 'react-leaflet';

// const LocationSection = () => {
//     const [location, setLocation] = useState({ lat: 0, lng: 0 });
//     const [searchValue, setSearchValue] = useState("");
//     const [suggestions, setSuggestions] = useState([]);

//     const handleSearch = (event) => {
//         setSearchValue(event.target.value);
//         // code to get location suggestions based on searchValue
//     };

//     const handleSelectSuggestion = (suggestion) => {
//         setSearchValue(suggestion.name);
//         setLocation({ lat: suggestion.lat, lng: suggestion.lng });
//     };

//     const handleMapClick = (event) => {
//         setLocation({ lat: event.latlng.lat, lng: event.latlng.lng });
//     };

//     return (
//         <div>
//             <h3>Shop Location</h3>
//             <label htmlFor="locationSearch">Search for Location:</label>
//             <input
//                 type="text"
//                 id="locationSearch"
//                 name="locationSearch"
//                 value={searchValue}
//                 onChange={handleSearch}
//             />
//             <br />
//             <ul>
//                 {suggestions.map((suggestion) => (
//                     <li key={suggestion.id} onClick={() => handleSelectSuggestion(suggestion)}>
//                         {suggestion.name}
//                     </li>
//                 ))}
//             </ul>
//             <Map center={location} zoom={13} onClick={handleMapClick}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <Marker position={location} />
//             </Map>
//         </div>
//     );
// };

// export default LocationSection;
