// import React, {Component} from 'react';
// import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
// import MessageList from './MessageList';
// import Input from './Input';

// var user_id;
// var clinic_id;
// var room_id;

// class ChatApp extends Component {
//     constructor(props) {        
//         user_id = sessionStorage.getItem('userID');
//         console.log('user id from session storage:'+ user_id);

//         clinic_id = sessionStorage.getItem('clinicID');
//         console.log('user id from session storage:'+ c_id)

//         room_id = user_id + clinic_id
//         console.log('room id is following:' +room_id)

//         super(props); 
//         this.state = {
//             currentUser: null,
//             currentRoom: {users:[]},
//             messages: [],
//             users: []
//         }
//         this.addMessage = this.addMessage.bind(this);
//         this.createRoom = this.createRoom.bind(this);
        

//     }

    

//     componentDidMount() {
//         const chatManager = new ChatManager({
//             instanceLocator: 'v1:us1:b0f369e5-f3fa-4e2f-ac37-538ce3bd5e62',
//             userId: this.props.currentId,
//             tokenProvider: new TokenProvider({
//                 url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/b0f369e5-f3fa-4e2f-ac37-538ce3bd5e62/token'
//             })
//         }).then(console.log('Chat manager initialized!!'))
//         // chatManager
//         //     .connect()
//         //     .then(currentUser => {
//         //         this.setState({ currentUser: currentUser })
//         //         return currentUser.subscribeToRoom({
//         //             roomId: "21759f48-7406-479a-9865-b9b4c5074044",
//         //             messageLimit: 100,
//         //             hooks: {
//         //                 onMessage: message => {
//         //                     this.setState({
//         //                         messages: [...this.state.messages, message],
//         //                     })
//         //                 },
//         //             }
//         //         })
//         //     })
//         //     .then(currentRoom => {
//         //         this.setState({
//         //             currentRoom,
//         //             users: currentRoom.userIds
//         //         })
//         //     })
//         //     .catch(error => console.log(error))
//     }

//     createUniqueUser(){
//         var u_id = sessionStorage.getItem('userID');
//        chatManager.createUser({
//             id: u_id,
//             name: u_id
//         }).then(
//             console.log("User CREATED!!!")
//         )
    
//     }



//     addMessage(text) {
//         this.state.currentUser.sendMessage({
//             text,
//             roomId: this.state.currentRoom.id
//         })
//         .catch(error => console.error('error', error));
//     }

//     createRoom()
//     {
//         this.state.currentUser.createRoom({
//             id: '#general',
//             name: 'General',
//             private: true,
//             addUserIds: ['atilgana@yahoo.com'],
//             customData: { foo: 42 },
//           }).then(room => {
//             console.log(`Created room called ${room.name}`)
//           })
//           .catch(err => {
//             console.log(`Error creating room ${err}`)
//           })
//     }
//     render() {
//         return (
//             <div>
//                 <h2 className="header">Hi There, Ask us anything</h2>
//                 <MessageList messages={this.state.messages} />
//                 <Input className="input-field" onSubmit={this.addMessage} />
//             </div>
//         )
//     }
// }
// export default ChatApp;