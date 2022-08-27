import React from "react";
import user_icon from "../images/user-icon.jpeg"
import { Link } from 'react-router-dom' 
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import TextField from '@mui/material/TextField';
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

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },

  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const SidebarFind = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_L66OmjkpvW5b7XXKZ0kxGXPQrvKQG5g",
    libraries: ["places"],
  });

  return (
    <div className="sidebar">
      
      <div className="title">Where do you want to park?</div>
      
      <div className="subtitle">Location</div>

      <PlacesAutocomplete />

      <div className="subtitle">Booking Start:</div>
      <TextField
        id="datetime-local"
        className="time-box"
        type="datetime-local"
        defaultValue="YYYY-MM-DDT"
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <div className="subtitle">Booking End:</div>
        <TextField
          id="datetime-local"
          className="time-box"
          type="datetime-local"
          defaultValue="YYYY-MM-DDT"
          sx={{ width: 250 }}
          InputLabelProps={{
            shrink: true,
          }}
        />  

      <div className="subtitle">Budget</div>

      <input className="sidebar-input-box" type="text" id="location" placeholder="Add a budget (AUD)"/>

      <Link to ="/search_result">
        <input className="submit-button" type="submit" value="FIND A SPOT"/>
      </Link>      

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
        className="sidebar-input-box"
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


export default SidebarFind