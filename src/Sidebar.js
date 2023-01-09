import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import {Avatar,IconButton} from "@material-ui/core"
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';
import db from "./firebase";
import { useStateValue } from './StateProvider';

function Sidebar() {  
  const [rooms, setRooms] = useState([]);
  const [{user},dispatch] = useStateValue();

  useEffect(() =>{
   const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>(
      setRooms(snapshot.docs.map(doc =>
        ({
          id:doc.id,
          data: doc.data()
        })
        ))
    ));

    return () => {
      unsubscribe();

    }
  },[])


return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar src={user?.photoURL}/>
        <div className='sidebar__headerRight'></div>
        <IconButton> 
        {/* esse wrap karne se logo clickable ho jaata hai */}
        <DonutLargeIcon />
        </IconButton>

        <IconButton>    
        <ChatIcon />
        </IconButton>

        <IconButton>
        <MoreVertIcon />
        </IconButton>
      </div>

      <div className="sidebar__search">
        <div className='sidebar__searchContainer'>
        <SearchOutlined />
        <input placeholder='Search or start new chat' type="text" />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat addNewChat />
        {/* <SidebarChat />
        <SidebarChat />
        <SidebarChat /> */}

        {rooms.map(room =>(
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
        
      </div>
    </div>
  )
}


export default Sidebar
