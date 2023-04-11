import React, { useState } from 'react'
import './write.css'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import moment from 'moment'

const Write = () => {

  const state = useLocation().state
  const [title, setTitle] = useState(state?.title || '')
  const [value, setValue] = useState(state?.desc || '')
  const [file, setFile] = useState(null)
  const [categorie, setCategorie] = useState(state?.categorie || '')

  const upload = async ()=>{
    try{
      const formData = new FormData();
      formData.append('file', file)
      const res = await axios.post("http://localhost:8080/api/upload", formData)
      return res.data
    }
    catch(error){
      console.log(error)
    }
  }

  const handleClick = async (e) =>{
        e.preventDefault()
        const imgUrl = await upload()

        try{
          state ? await axios.put(`http://localhost:8080/api/posts/${state.id}`,{
            title, desc: value, categorie, img:file ? imgUrl : ""
          }) : await axios.post(`http://localhost:8080/api/posts/`, {
            title, desc:value, categorie, img:file ? imgUrl : "", date: moment(Date.now()).format('YYY-MM-DD')
          })
        }
        catch(error){
          console.log(error)
        }

  }

  return (
    <>
      <div className="write">
        <div className="write-left">
          <input type="text" value={title} className="write-input" placeholder='Titre...' onChange={e => setTitle(e.target.value)} />
          <div className="write-input-quill">
            <ReactQuill theme='snow' className='write-quill' value={value} onChange={setValue}/>
          </div>
        </div>

        <div className="write-right">
          <div className="write-item">
            <h1 className="write-h1">Publish</h1>
            <span className="write-item-span"><b>Status :</b> Draft</span>
            <span className="write-item-span"><b>Visibility :</b> Public</span>
            <input type="file" name='' id='file' className="write-item-file"  onChange={e => setFile(e.target.files[0])} />
            <label htmlFor="file" className="write-label">Upload Image</label>
            <div className="write-button">
              <button className="write-btn">Save as a draft</button>
              <button className="write-btn" onClick={handleClick}>Publish</button>
            </div>
          </div>
          <div className="write-item">
            <h1 className="write-h1">Category</h1>
            <div className="write-input-row">
              <input type="radio" name='cat' checked={ categorie === 'art' } id='art' value='art' onChange={e => setCategorie(e.target.value)}/>
              <labeL htmlFor='art'>Art</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' checked={ categorie === 'science' } id='science' value='science' onChange={e => setCategorie(e.target.value)} />
              <labeL htmlFor='science'>Science</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' checked={ categorie === 'technology' } id='technology' value='technology' onChange={e => setCategorie(e.target.value)} />
              <labeL htmlFor='technology'>Technology</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' checked={ categorie === 'cinema' } id='cinema' value='cinema' onChange={e => setCategorie(e.target.value)} />
              <labeL htmlFor='cinema'>Cinema</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' checked={ categorie === 'design' } id='design' value='design' onChange={e => setCategorie(e.target.value)} />
              <labeL htmlFor='design'>Design</labeL>
            </div>
            <div className="write-input-row">
              <input type="radio" name='cat' checked={ categorie === 'food' } id='food' value='food' onChange={e => setCategorie(e.target.value)} />
              <labeL htmlFor='food'>Food</labeL>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Write