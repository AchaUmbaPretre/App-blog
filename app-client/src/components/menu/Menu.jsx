import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './menu.css'

const Menu = ({categorie}) =>{ 
    
    const [posts, setPosts] = useState({});
  
    useEffect(()=>{
  
      const fetchData = async()=>{
        try{
          const res = await axios.get("http://localhost:8080/api/posts/?categorie="+categorie);
          setPosts(res);
  
        }catch(error){
          console.log(error)
        }
      }
      fetchData();
    },[categorie])

  return (
    <>
        <div className="single-right">
          <div className="single-row-right2">
            <img src={posts.img} alt="" className="single-right-img" />
            <h2 className="single-right-h2">{posts.title}</h2>
            <button className="single-right-btn">Read More</button>
          </div>
        </div>
    </>
  )
}

export default Menu;