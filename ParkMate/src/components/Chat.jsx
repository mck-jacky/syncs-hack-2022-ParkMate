import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { AiOutlineMessage } from 'react-icons/ai'
import ChatLog from './ChatLog';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import girl_icon from "../images/girl.png"
import girl2_icon from "../images/girl2.jpg"
import man_icon from "../images/man.PNG"
import man2_icon from "../images/glasses.PNG"


class Chat extends React.Component {
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
    return (
      <span>
        <AiOutlineMessage onClick={this.handleOpenModal} className="header-nav-tool"/>
        <Modal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <AiOutlineCloseCircle  style={{"fontSize": "50px", "padding-left": "96%"}}  onClick={this.handleCloseModal} />
          <ChatLog name="sarahlee908" image={girl2_icon} message="This isn’t the ideal solution, however, it’s the only solution short of either keeping it in storage at the dealer, or riding it down to my parents place. Thank you!"/>
          <ChatLog name="PSmatt4628" image={man_icon} message="Anything as far as security is concerned that I should consider? I have a rain cover, and I will likely be getting a thick chain and padlock to wrap around the wheels."/>
          <ChatLog name="Natalie Truth" image={girl_icon} message="Hey John, I see you have listed the space on Pitt St, and I was just wondering if this space would fit a mini van? Cheers Natalie Truth. Appreciate your message!"/>
          <ChatLog name="37893252" image={man2_icon} message="Hey John, I see you have listed the space on Pitt St, and I was just wondering if this space would fit a mini van? Cheers Charlie. Appreciate your response! Cheers!"/>
        </Modal>
      </span>
    );
  }
}

const props = {};

export default Chat;