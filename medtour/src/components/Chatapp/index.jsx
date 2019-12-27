import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import LandingNav from "../LandingNav";
// import Tabs from "./tabs";
// import Footer from "../Footer";
// import Chatapp from "./ChatApp"
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import {default as Chatkit} from '@pusher/chatkit-server'; 
import MessageList from './MessageList';
import Input from './Input';
import './index.css'

const chatkit = new Chatkit({
    instanceLocator: 'v1:us1:b0f369e5-f3fa-4e2f-ac37-538ce3bd5e62',
    key: 'c11a04fd-67ae-4836-886c-3a5bd3c4f806:AXcqLAAtjuqwoVPnK9OmC1RD4oLbclRdgkokeTDIo1w='
})

var u_id = String(sessionStorage.getItem('userID'));
var c_id = String(sessionStorage.getItem('clinicID'));


var room_id = String(u_id + c_id)

// setter
localStorage.setItem('chatID', room_id);




console.log("Room id is:"+room_id)

class Chat extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentUser: String(u_id),
            currentRoom: {users:[]},
            messages: [],
            users: []
        }
        // this.create_room = this.create_room.bind(this);
        this.createUniqueUser = this.createUniqueUser.bind(this);
        this.addMessage = this.addMessage.bind(this);

    }

createUniqueUser(chatkit){
    
    u_id = String(u_id)
       chatkit.createUser({
            id: u_id,
            name: u_id
        }).then(
            console.log("User CREATED!!!")
        )
    // this.create_room();
};

// create_room()
//     {
//         this.state.currentUser.createRoom({
//             id: room_id,
//             name: 'Contact',
//             private: true,
//             addUserIds: [String(u_id), String(c_id)],
//             customData: { foo: 42 },
//           }).then(room => {
//             console.log(`Created room called ${room.name}`)
//           })
//           .catch(err => {
//             console.log(`Error creating room ${err}`)
//           })
//     };

addMessage(text) {
    this.state.currentUser.sendMessage({
        text,
        roomId: this.state.currentRoom.id
    })
    .catch(error => console.error('error', error));
}
    
componentDidMount(){
  
    const chatManager = new ChatManager({
        instanceLocator: 'v1:us1:b0f369e5-f3fa-4e2f-ac37-538ce3bd5e62',
        userId: u_id,
        tokenProvider: new TokenProvider({
            url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/b0f369e5-f3fa-4e2f-ac37-538ce3bd5e62/token'
        })
        

    });

    this.createUniqueUser(chatkit);


    chatManager.connect().then(currentUser=>{
        this.setState({currentUser: currentUser})
        currentUser.createRoom({
            id: room_id,
            name: 'Contact',
            private: true,
            // String(c_id)
            addUserIds: [],
            customData: { foo: 42 },
          }).then(console.log(`Created room:  ${room_id}`)
          
          ).catch(err => {console.log(`Error creating room ${err}`)})

          

    }).then(
        chatManager.connect().then(currentUser => {
            this.setState({ currentUser: currentUser })
            console.log(`Created room:  ${room_id}`)
            return currentUser.subscribeToRoom({
                roomId: room_id,
                messageLimit: 100,
                hooks: {
                    onMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message],
                        })
                    },
                }
            })
        }).then(currentRoom => {
            this.setState({
                currentRoom,
                users: currentRoom.userIds
            })
            console.log(currentRoom.userIds)
        }).catch(error => console.log(error))
    )

}


    render() {
        return (
           
                <div >
                    <h2 className="header">Live Support</h2>
                    <MessageList messages={this.state.messages} />
                    <Input className="input-field" onSubmit={this.addMessage} />
                </div>
        );
    }
}

export default Chat;