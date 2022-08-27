import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { FiSettings } from 'react-icons/fi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {SettingsPane, SettingsPage, SettingsContent, SettingsMenu} from 'react-settings-pane'

class Settings extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    let settings = {
      'mysettings.general.name': 'Dennis Stücken',
      'mysettings.general.color-theme': 'purple',
      'mysettings.general.email': 'dstuecken@react-settings-pane.com',
      'mysettings.general.picture': 'earth',
      'mysettings.profile.firstname': 'John',
      'mysettings.profile.lastname': 'Doe',
    };

    const menu = [
      {
        title: 'General',          // Title that is displayed as text in the menu
        url: '/settings/general'  // Identifier (url-slug)
      },
      {
        title: 'Profile',
        url: '/settings/profile'
      }
    ];

    const dynamicOptionsForProfilePage = [
      {
        key: 'mysettings.general.email',
        label: 'E-Mail address',
        type: 'text',
      },
      {
        key: 'mysettings.general.password',
        label: 'Password',
        type: 'password',
      }
    ];

  const leavePaneHandler = (wasSaved, newSettings, oldSettings) => {
  // "wasSaved" indicates wheather the pane was just closed or the save button was clicked.

  if (wasSaved && newSettings !== oldSettings) {
    // do something with the settings, e.g. save via ajax.
  }
};

const settingsChanged = (changedSettings) => {
  // this is triggered onChange of the inputs
};
    return (
      <span>
        <FiSettings onClick={this.handleOpenModal} className="header-nav-tool"/>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <AiOutlineCloseCircle  style={{"fontSize": "50px", "padding-left": "96%"}}  onClick={this.handleCloseModal} />
          <SettingsPane items={menu} index="/settings/general" settings={settings} onPaneLeave={leavePaneHandler}>
      <SettingsMenu headline="General Settings" />
      <SettingsContent closeButtonClass="secondary" saveButtonClass="primary" header={true}>
        <SettingsPage handler="/settings/general">
           <fieldset className="form-group">
             <label for="profileName">Username: </label>
             <input type="text" className="form-control" />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileName">Email: </label>
             <input type="text" className="form-control" onChange={settingsChanged}  />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileName">Old Password: </label>
             <input type="password" className="form-control" onChange={settingsChanged} />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileName">New Password: </label>
             <input type="password" className="form-control" onChange={settingsChanged} />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileName">Confirm New Password: </label>
             <input type="password" className="form-control" onChange={settingsChanged} />
           </fieldset>
           <fieldset className="form-group">
             <label for="profileColor">Color-Theme: </label>
             <select name="mysettings.general.color-theme" id="profileColor" className="form-control" defaultValue={settings['mysettings.general.color-theme']}>
               <option value="blue">Blue</option>
               <option value="red">Red</option>
               <option value="purple">Purple</option>
               <option value="orange">Orange</option>
             </select>
           </fieldset>

           <fieldset className="form-group">
             <label for="profileColor">Birthday: </label>
             <input type="datetime-local" className="form-control" name="mysettings.general.name" placeholder="Name" id="general.ame" onChange={settingsChanged} defaultValue={settings['mysettings.general.name']} />
           </fieldset>

        </SettingsPage>
        <SettingsPage handler="/settings/profile"/>
      </SettingsContent>
    </SettingsPane>
        </Modal>
      </span>
    );
  }
}

const props = {};

export default Settings;