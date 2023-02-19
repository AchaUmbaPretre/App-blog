import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import {Link} from 'react-router-dom'
import './topbar.css'

const Topbar = () => {
  const  {currentUser, Logout} = useContext(AuthContext);
  return (
    <>
      <div className="topbar">
      <Link to='/'><div className="logo"><span className="span-logo">BLOG-</span>acha</div></Link>
        <ul className="topbar-ul">
        <Link to='/?categorie=art'><li className="topbar-li">Art</li></Link>
        <Link to='/?categorie=science'><li className="topbar-li">Science</li></Link>
        <Link to='/?categorie=technology'><li className="topbar-li">Technology</li></Link>
        <Link to='/?categorie=cinema'><li className="topbar-li">Cinema</li></Link>
        <Link to='/?categorie=design'><li className="topbar-li">Design</li></Link>
        <Link to='/?categorie=food'><li className="topbar-li">Food</li></Link>
          <span className="topbar-span">{currentUser?.username}</span>
          {currentUser? <span className="topbar-span" onClick={Logout}>Logout</span>
          : <span className="topbar-span"> <Link to='/login'>Login</Link></span>
          }
          <div className="topbar-row-writer">
          <Link to='/write'><span className="topbar-writer">Write</span></Link>
          </div>
         </ul>
      </div>
    </>
  )
}

export default Topbar