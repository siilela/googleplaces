import { useRef, useState, useEffect } from "react";
//import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const AutoComplete = () => {
  const [location, setLocation] = useState("initialState");
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const options = {
    componentRestrictions: { country: "za" },
    fields: ["address_components", "geometry", "icon", "name"],
    types: ["establishment"],
  };

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
  });

  return (
    <div>
      <label>enter address :</label>
      <input ref={inputRef} onChange={(e) => setLocation(e.target.value)} />
      <h1>{location}</h1>
    </div>
    // <div>
    //   <GooglePlacesAutocomplete apiKey="AIzaSyDY53WtPnbIeZBUPAWfYS9W_lcvncYZJgo" />
    // </div>
  );
};
export default AutoComplete;
