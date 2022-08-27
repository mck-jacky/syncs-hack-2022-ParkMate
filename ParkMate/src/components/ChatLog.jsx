import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'

const ChatLog = ({ name, message, image }) => {
  return (
    <div className='chat-item'>
        <div style={{"padding-left": "50px"}}>
            <img className="user-icon-small" src={image} alt="user-icon"/>
            <div>{name}</div>
        </div>
        <div>{message}</div>
        <div>
            <AiOutlineMessage style={{"fontSize": "50px", "color": "grey", "padding-right": "50px"}} />
        </div>
        
    </div>
  )
}

export default ChatLog