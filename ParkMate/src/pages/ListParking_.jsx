import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Sidebarlist from "../components/SidebarList_";
import googlemapzoom from "../images/googlemapzoom.png"
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom' 
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
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

const Listparking = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_L66OmjkpvW5b7XXKZ0kxGXPQrvKQG5g",
    libraries: ["places"],
  });

  return (
    <div>
      <Header />

      <div className="container">
        <Sidebarlist/>

        <div className="search_container">
          <img className="googlemap-bg" src={googlemapzoom} alt="googlemap"/>

          {/* <div className="search-parking-form">
            <div className="title">List a new parking spot</div>

            <div className="booking-font">Location</div>

            <PlacesAutocomplete />

            <div className="booking-font">Hourly Rate</div>
            <input className="input-box" type="text" id="location" placeholder="AUD/hr"/>
            <div className="booking-font">How to access</div>
            <input className="input-box" type="text" id="location"/>
            <div className="booking-font">Additional notes</div>
            <input className="input-box" type="text" id="location"/>

            <Upload {...props}>
              <Button className="upload-button" icon={<UploadOutlined />}> Upload Ownership Documents</Button>
            </Upload>

            <Link to ="/listing_confirmed">
              <input className="submit-button" type="submit" value="LIST PARKING"/>
            </Link>

          </div> */}
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


export default Listparking