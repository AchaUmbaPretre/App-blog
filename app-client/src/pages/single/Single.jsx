import React, { useContext, useEffect, useState } from 'react'
import  {Link, useLocation, useNavigate} from 'react-router-dom'
import './single.css'
import image3 from '../../assets/image3.jpg'
import axios from 'axios'
import { AuthContext } from '../../context/authContext'
import Menu from '../../components/menu/Menu'

const Single = () => {

  const [post, setPost] = useState({});
  const {currentUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2];

  useEffect(()=>{
    const fetchData = async ()=>{

      try{
        const res = await axios.get("http://localhost:8080/api/posts/"+postId);
        setPost(res.data)

      }catch(error){
        console.log(error)
      }
    };
    fetchData()

  },[postId])

  const handDelete = async ()=>{

    try{
      await axios.delete("http://localhost:8080/api/posts/"+postId);
      navigate('/');

    }catch(error){
      console.log(error)
    }
  }

  return (
    <>
      <div className="single">
        <div className="single-left">
          <img src={post.img} alt="" className="single-img" />
          <div className="single-row">
           {post?.userImg && <img src={image3} alt="" className="single-row-img" />}
            <div className="single-row-center">
              <h2 className="single-center-h2">{post.username}</h2>
              <span className="single-span-desc">Posted{post.date}</span>
            </div>
          {currentUser.username === post.username && ( 
            <div className="single-row-right">
              <Link to={`/write?edit=2`}>
              <div className="single-icon icon-green">
                <i className="fa-regular fa-edit icon-single"></i>
              </div>
              </Link>
              <div className="single-icon icon-red" onClick={handDelete}>
                <i className="fa-regular fa-trash-can icon-single"></i>
              </div>
            </div>)}
          </div>
          <div className="single-row-text">
            <h1 className="single-h1">{post.title}</h1>
            <p className="single-desc">{post.description}</p>
          </div>
        </div>

        <Menu categorie={post.categorie}/>
      </div>
    </>
  )
}

export default Single