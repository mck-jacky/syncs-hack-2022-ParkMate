import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { IoMdNotificationsOutline } from 'react-icons/io'

class Notifications extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.success('Parking spot is now live!', 'New Listing approved');
          NotificationManager.info('Can this spot fit a Honda Civic?' , 'Message from Jane Smith');
          NotificationManager.success('@Sam2467 has paid for parking on Pitt St', 'Payment received');
          break;
        case 'success':
          NotificationManager.success('Parking spot is now live!', 'New Listing approved');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
    };
  };

  render() {
    return (
      <span>
        <IoMdNotificationsOutline className="header-nav-tool" onClick={this.createNotification('info')}/>
        <NotificationContainer/>
      </span>
    );
  }
}

export default Notifications;