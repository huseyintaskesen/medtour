import React, {Component} from 'react';
import './messages.css';
import defaultAvatar from './default-avatar.png';
import ChatIcon from '@material-ui/icons/Chat';
import IconButton from '@material-ui/core/IconButton';
import Chat from '../../Chatapp/index'

var u_id = String(localStorage.getItem('userID'));
var c_id = String(localStorage.getItem('clinicID'));

var room_id = String(u_id + c_id)


class MessagesView extends Component {
  
    constructor(props){
      super(props)
      this.state = {
        messageView:'',
        messageUserId: '',
        currentUser: c_id

      }
  
      this.openMessage = this.openMessage.bind(this);
  
    }
  


render(){
    return (
        <div>
            <div className="UserList">
            <div className="UserList__titlebar">
                <img
                src={defaultAvatar}
                className="UserList__titlebar__avatar"
                alt="avatar"
                />
                <span className="UserList__titlebar__logged-in-as">{this.props.messageUserId}</span>
            </div>
            <div className="UserList__container">
                <ul className="UserList__container__list">
                <li className="UserList__container__list__item">
                    <div>
                    <img
                        src={defaultAvatar}
                        className="UserList__container__list__item__avatar"
                        alt="avatar"
                    />
                    </div>
                    <div className="UserList__container__list__item__content">
                    <p className="UserList__container__list__item__content__name">
                        User Name:
                    </p>
                    <p className="UserList__container__list__item__content__text">
                        Last Message:
                    </p>
                    </div>
                    <div button="UserList__container__list__item__time">
                            <IconButton edge="end" aria-label="chat" >
                            <ChatIcon />
                            </IconButton>
                    </div>
                </li>
                </ul>
            </div>
            </div>
            <div>
            <Chat  clinic={true}></Chat>
            </div>
        </div>
    );

}

openMessage(){
    console.log("clicked")
}



}

export default MessagesView;