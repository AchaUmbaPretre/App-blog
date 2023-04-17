import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './menu.css'

const Menu = ({categorie}) =>{ 
    
    const [posts, setPosts] = useState([]);
  
    useEffect(()=>{
  
      const fetchData = async()=>{
        try{
          const res = await axios.get( `http://localhost:8080/api/posts/?categorie=${categorie}`);
          setPosts(res.data);
  
        }catch(error){
          console.log(error)
        }
      }
      fetchData();
    },[categorie])

    const getText = (html)=> {
      const doc = new DOMParser().parseFromString(html, 'text/html')
      return doc.body.textContent
    }
    console.log(categorie)

  return (
    <>
        <div className="single-right">
       { posts.map((post)=>(
        <div className="single-row-right2" key={post.id}>
            <img src={`../upload/${post?.img}`} alt="" className="single-right-img" />
            <h2 className="single-right-h2">{getText(post?.title)}</h2>
            <button className="single-right-btn">Read More</button>
          </div>
          ))
          }
        </div>
    </>
  )
}

export default Menu;