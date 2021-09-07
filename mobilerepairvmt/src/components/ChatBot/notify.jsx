import Lobby from "./lobby";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";

const Notify =()=>{
const[connection, setConnection] = useState();
const[messages, setMessages]= useState([]);

const joinRoom = async (user, room) => {
  try {
    const connection = new HubConnectionBuilder()
      .withUrl("https://localhost:44394/api/chatHub")
      .configureLogging(LogLevel.Information)
      .build();

    connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, {user, message}]);
      console.log("message received:", message);
    });
    await connection.start();
    await connection.invoke("JoinRoom", { user, room });
    this.setState({
      connection: connection,
    });
  } catch (e) {
    console.log(e);
  }
};
return(
<div>
    <Lobby joinRoom={joinRoom}/>
</div>
)
}
export default Notify;