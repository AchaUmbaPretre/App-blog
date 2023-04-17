import React, { useEffect, useState } from 'react'
import './home.css'
import {Link,useLocation} from 'react-router-dom'
import axios from 'axios'

const Home = () =>{
  
  const [posts, setPosts] = useState([]);
  const categorie = useLocation().search;

  useEffect(()=>{

    const fetchData = async()=>{
      try{
        const res = await axios.get("http://localhost:8080/api/posts" + categorie);
        setPosts(res.data)

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
 
  return (
    <>
        <div className="home">
          <div className="home-container">
            { posts.map((post) => {

  return   <div className="home-row" key={post.id}>
              <div className="home-image">
                <img src={`../upload/${post.img}`} alt="" className="home-img" />
              </div>
              <div className="home-row-text">
                <Link to={`/post/${post.id}`}>
                  <h1 className="home-h1">{post.title}</h1>
                </Link>
                <p className="home-desc">{getText(post.desc)}</p>
                <button className="home-btn">Read More</button>
              </div>
            </div>
            })}
          </div>
        </div>
    </>
  )
}

export default Home