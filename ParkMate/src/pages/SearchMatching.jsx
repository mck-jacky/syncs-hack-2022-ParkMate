import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import SidebarMatch from "../components/SidebarMatch";
import googlemap from "../images/googlemap-bg.png"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom' 
import { useState, useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const SearchMatching = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_L66OmjkpvW5b7XXKZ0kxGXPQrvKQG5g",
    libraries: ["places"],
  });

  return (
    <div>
      <Header />

      <div className="container">
        <SidebarMatch/>

        <div className="search_container">
          <img className="googlemap-bg" src={googlemap} alt="googlemap"/>

          
        </div>

      </div>
    </div>
  )
}

const PlacesAutocomplete = () => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="input-box"
        placeholder="What's your address?"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};


export default SearchMatching