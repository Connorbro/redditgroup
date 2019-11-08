import React from 'react';
import redditwhite from '../images/redditwhite.png';
import Browse from '../images/browse.png';
import Pencil from '../images/pencil.png';
import Message from '../images/message.png';
import Inbox from '../images/inbox.png';
import '../App.css'


export default function Nav() {
   return (
       <div className="navBar">
           <li><a href="#"><img src={redditwhite}></img></a></li>
           <li><a href="#"><img src={Browse}></img></a></li>
           <li><a href="#"><img src={Pencil}></img></a></li>
           <li><a href="#"><img src={Message}></img></a></li>
           <li><a href="#"><img src={Inbox}></img></a></li>
       </div>
   )
}
