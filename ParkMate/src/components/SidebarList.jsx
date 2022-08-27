import React from "react";
import user_icon from "../images/user-icon.jpeg"
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

const SidebarList = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA_L66OmjkpvW5b7XXKZ0kxGXPQrvKQG5g",
    libraries: ["places"],
  });

  return (
    <div className="sidebar">
      
      <div className="title">List a new parking spot</div>
      
      <div className="subtitle">Location</div>

      <PlacesAutocomplete />

      <div className="subtitle">Hourly Rate</div>
      <input className="sidebar-input-box" type="text" id="location" placeholder="AUD/hr"/>
      <Option reason="auto-adjust by ParkMate" />

      <div className="subtitle">Bay dimension</div>
      <div className="dimension">
        <input className="sidebar-input-box-dimension" type="text" id="location" placeholder="m"/>
        <span className="sidebar-input-box-dimension-x">x</span>
        <input className="sidebar-input-box-dimension" type="text" id="location" placeholder="m"/>
      </div>

      <div className="subtitle">How to access</div>
      <input className="sidebar-input-box" type="text" id="location" placeholder="eg. by remote"/>

      <Upload {...props}>
        <Button className="upload-button" icon={<UploadOutlined />}> Upload Ownership Documents</Button>
      </Upload>

      {/* <Link to ="/listing_confirmed"> */}
      <input className="submit-button" type="submit" value="LIST PARKING"/>
      {/* </Link> */}

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

const Option = ({ reason }) => {
  return (
    <label class="toggle">
      <input class="toggle__input" type="checkbox" />
        <span class="toggle__label">
          <span class="toggle__text2">{reason}</span>
      </span>
    </label>
  )
}


export default SidebarList