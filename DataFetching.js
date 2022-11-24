import React, { useState, useEffect } from "react";
import axios from "axios";
// import AvtarFetching from "./AvtarFetching";
// import Avatars from "./Avatars";
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-male-sprites';

function DataFetching() {

    const [posts, setPosts] = useState([]);

    let svg = createAvatar(style, {
        seed: 'custom-seed',
        // ... and other options
      });
      
    const avatar = createAvatar(style, {
        dataUri: true,
    })

    useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/posts")
       .then(res => {
        console.log(res)
        setPosts(res.data)
       })
       .catch(err => {
        console.log(err)
       })
    }, [])

    return (
        <div>
        <table>
            
            <tr>
                <th>Title</th>
                <th>Avatar</th>
            </tr>
            
            <tr>
               {posts.map(post => <tr key={post.id} style={{textAlign: "left"}}>{post.title}</tr>)}
               {posts.map(post =><tr style={{padding: "10px"}}><img width="150" height="150" src={avatar} /></tr>)}
           </tr>
            
        </table>
        
           {/* <ul>
            {
              posts.map(post => <li key={post.id}>{post.title}</li>
              <li key={post.id}><img src="https://avatars.dicebear.com/api/adventurer-neutral/:seed.svg"></li>)
            }
           </ul> */}
        </div>
    )
}

export default DataFetching;